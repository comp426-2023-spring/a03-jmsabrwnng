#!/usr/bin/env node

import minimist from 'minimist';
import { rps } from '../lib/rpsls.js';

// Parse command-line arguments
const args = minimist(process.argv.slice(2));

// Function to print usage and help text
function printUsage() {
  console.log(`Usage: node-rps [choice]`);
  console.log(`Options:`);
  console.log(`  choice  Specify player choice (rock, paper, or scissors)`);
  console.log(`          If not provided, a random choice will be made.`);
  console.log(`  --help, -h   Display help text`);
  console.log(`  --rules, -r  Display game rules`);
}

// Function to print game rules
function printRules() {
  console.log(`Game Rules:`);
  console.log(`- Rock beats Scissors`);
  console.log(`- Scissors beats Paper`);
  console.log(`- Paper beats Rock`);
  console.log(`- If both players choose the same option, it's a tie.`);
}

// Check for help flag
if (args.help || args.h) {
  printUsage();
  process.exit(0);
}

// Check for rules flag
if (args.rules || args.r) {
  printRules();
  process.exit(0);
}

// Get player choice
const playerChoice = args._[0];

// Play RPS game
let result;
try {
  result = rps(playerChoice);
} catch (error) {
  console.error(`Error: ${error.message}`);
  console.log(); // Empty line for spacing
  printUsage();
  console.log(); // Empty line for spacing
  printRules();
  process.exit(1);
}

// Print game result
console.log(JSON.stringify(result, null, 2));
