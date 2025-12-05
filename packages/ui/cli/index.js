#!/usr/bin/env node

import fs from "fs";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const root = process.cwd();

const templates = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "templates.json"), "utf8")
);

const component = process.argv[2];

if (!component) {
  console.error("Usage: npx my-ui add <component>");
  process.exit(1);
}

const template = templates[component];

if (!template) {
  console.error(`Component "${component}" not found.`);
  process.exit(1);
}

for (const file of template.files) {
  const source = path.join(__dirname, "..", file);
  const destDir = path.join(root, template.destination);
  const dest = path.join(destDir, path.basename(file));

  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  fs.copyFileSync(source, dest);

  console.log(`✔ Copied ${file} → ${dest}`);
}

console.log("🎉 Done!");
