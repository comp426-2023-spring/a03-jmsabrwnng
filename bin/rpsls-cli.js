#!/usr/bin/env node

import minimist from 'minimist';
import { rpsls } from '../lib/rpsls.js';

// Parse command-line arguments
const args = minimist(process.argv.slice(2));

// Function to print usage and help text
function printUsage() {
  console.log(`Usage: node-rpsls [choice]`);
  console.log(`Options:`);
  console.log(`  choice  Specify player choice (rock, paper, scissors, lizard, or spock)`);
  console.log(`          If not provided, a random choice will be made.`);
  console.log(`  --help, -h   Display help text`);
  console.log(`  --rules, -r  Display game rules`);
}

// Function to print game rules
function printRules() {
  console.log(`Game Rules:`);
  console.log(`- Rock beats Scissors and Lizard`);
  console.log(`- Paper beats Rock and Spock`);
  console.log(`- Scissors beats Paper and Lizard`);
  console.log(`- Lizard beats Paper and Spock`);
  console.log(`- Spock beats Rock and Scissors`);
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

// Play RPSLS game
const result = rpsls(playerChoice);

// Print game result
console.log(JSON.stringify(result, null, 2));
