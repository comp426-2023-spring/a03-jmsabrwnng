#!/usr/bin/env node


const { playRPSLS } = require('../lib/rpsls.js');
const argv = require('minimist')(process.argv.slice(2));

// Display help text
if (argv.h || argv.help) {
  console.log(`
    Rock Paper Scissors Lizard Spock CLI

    Usage: node-rpsls [option]

    Options:
      -h, --help      Show help text
      -r, --rules     Show game rules
  `);
  process.exit(0);
}

// Display game rules
if (argv.r || argv.rules) {
  console.log(`
    Rock Paper Scissors Lizard Spock Rules:

    Scissors cuts Paper
    Paper covers Rock
    Rock crushes Lizard
    Lizard poisons Spock
    Spock smashes Scissors
    Scissors decapitates Lizard
    Lizard eats Paper
    Paper disproves Spock
    Spock vaporizes Rock
    Rock crushes Scissors
  `);
  process.exit(0);
}

// Play the game
const result = playRPSLS(argv._[0]);

// Print the game result
if (result.error) {
  console.error(result.error);
} else {
  console.log(`Player: ${result.player}`);
  console.log(`Opponent: ${result.opponent}`);
  console.log(`Result: ${result.result}`);
}
