#!/usr/bin/env node

import fs from "fs";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const root = process.cwd();

const templates = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "templates.json"), "utf8")
);

const command = process.argv[2];
const component = process.argv[3];

if (!command || command !== "add") {
  console.error("Usage: npx @repo/ui add <component>");
  process.exit(1);
}

if (!component) {
  console.error("Usage: npx @repo/ui add <component>");
  process.exit(1);
}

const template = templates[component];

if (!template) {
  console.error(`Component "${component}" not found.`);
  process.exit(1);
}

// Detect if we're inside an app directory (apps/web, apps/docs, etc.)
const currentDir = root;
const parentDir = path.dirname(currentDir);
const grandparentDir = path.dirname(parentDir);
const appName = path.basename(currentDir);
const isInsideApp = path.basename(parentDir) === "apps";

// If inside an app, use the app's directory as the base
const baseDir = isInsideApp ? currentDir : root;

for (const file of template.files) {
  const source = path.join(__dirname, "..", file);
  const destDir = path.join(baseDir, template.destination);
  const dest = path.join(destDir, path.basename(file));

  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  fs.copyFileSync(source, dest);

  console.log(`✔ Copied ${file} → ${dest}`);
}

console.log("🎉 Done!");
