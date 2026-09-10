import { spawnSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = JSON.parse(readFileSync(resolve(root, "openbot-source.json"), "utf8"));
if (source.repository !== "https://github.com/yxflc11/openbot.git" || !/^[a-f0-9]{40}$/.test(source.commit)) {
  throw new Error("Review an exact OpenBot repository commit before building the product demo.");
}
const checkout = resolve(root, ".cache/openbot");
function run(command, args, cwd = root) {
  const result = spawnSync(command, args, { cwd, stdio: "inherit", shell: false });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`${command} failed (${result.status}).`);
}
mkdirSync(resolve(root, ".cache"), { recursive: true });
if (!existsSync(resolve(checkout, ".git"))) run("git", ["clone", "--filter=blob:none", "--no-checkout", source.repository, checkout]);
run("git", ["fetch", "--depth=1", "origin", source.commit], checkout);
run("git", ["checkout", "--detach", source.commit], checkout);
const npm = process.env.npm_execpath;
if (!npm) throw new Error("Use npm run prepare:demo so the same npm CLI builds both repositories.");
run(process.execPath, [npm, "ci", "--no-audit", "--no-fund"], checkout);
run(process.execPath, [npm, "exec", "--", "turbo", "run", "build", "--filter=@openbot/web"], checkout);
run(process.execPath, [npm, "run", "build:demo", "--workspace", "@openbot/web"], checkout);
const demo = resolve(checkout, "apps/web/dist-demo");
if (!existsSync(resolve(demo, "index.html"))) throw new Error("Pinned product demo build is missing.");
const output = resolve(root, "public/demo");
rmSync(output, { recursive: true, force: true });
cpSync(demo, output, { recursive: true });
console.info(`Prepared real OpenBot components at ${source.commit}.`);
