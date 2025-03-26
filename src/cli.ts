#!/usr/bin/env node
import { generatePortFromName } from "../src/index.js";

// Get the project name from CLI arguments
const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("Usage: port-gen <project-name>");
  process.exit(1);
}

const projectName = args[0];
const port = generatePortFromName(projectName);

console.log(`Port for "${projectName}": ${port}`);
