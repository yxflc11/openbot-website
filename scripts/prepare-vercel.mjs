import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = resolve(root, "dist");
if (!existsSync(resolve(source, "index.html"))) throw new Error("Build the website before preparing Vercel output.");
const output = resolve(root, ".vercel-static");
// Match the canonical GitHub Pages prefix without changing any generated URLs.
rmSync(output, { recursive: true, force: true });
mkdirSync(output);
cpSync(source, resolve(output, "openbot-website"), { recursive: true });
cpSync(resolve(source, "404.html"), resolve(output, "404.html"));
