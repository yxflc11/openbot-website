import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
const require = createRequire(import.meta.url);
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const astro = resolve(dirname(require.resolve("astro/package.json")), "bin/astro.mjs");
if (process.argv[2] === "build" && !existsSync(resolve(root, "public/demo/index.html"))) {
  throw new Error("Run npm run prepare:demo to build the pinned OpenBot product demonstration first.");
}
function run(args) {
  const result = spawnSync(process.execPath, args, { cwd: root, stdio: "inherit", env: { ...process.env, ASTRO_TELEMETRY_DISABLED: "1" } });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}
run([astro, ...process.argv.slice(2)]);
if (process.argv[2] === "build") run([resolve(root, "scripts/check-build.mjs")]);
