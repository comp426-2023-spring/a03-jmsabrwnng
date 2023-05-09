#!/usr/bin/env node


const { playRPS } = require('../lib/rpsls.js');
const argv = require('minimist')(process.argv.slice(2));

// Display help text
if (argv.h || argv.help) {
  console.log(`
    Rock Paper Scissors CLI

    Usage: node-rps [option]

    Options:
      -h, --help      Show help text
      -r, --rules     Show game rules
  `);
  process.exit(0);
}

// Display game rules
if (argv.r || argv.rules) {
  console.log(`
    Rock Paper Scissors Rules:

    Rock beats Scissors
    Scissors beats Paper
    Paper beats Rock
  `);
  process.exit(0);
}

// Play the game
const result = playRPS(argv._[0]);

// Print the game result
if (result.error) {
  console.error(result.error);
} else {
  console.log(`Player: ${result.player}`);
  console.log(`Opponent: ${result.opponent}`);
  console.log(`Result: ${result.result}`);
}
