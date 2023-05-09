// Rock Paper Scissors
function playRPS(playerChoice) {
  const validChoices = ['rock', 'paper', 'scissors'];
  const opponentChoice = validChoices[Math.floor(Math.random() * validChoices.length)];

  if (!playerChoice) {
    return { player: opponentChoice };
  }

  if (!validChoices.includes(playerChoice)) {
    return {
      error: `Invalid choice "${playerChoice}". Available choices are: ${validChoices.join(', ')}`,
    };
  }

  if (playerChoice === opponentChoice) {
    return { player: playerChoice, opponent: opponentChoice, result: 'draw' };
  }

  if (
    (playerChoice === 'rock' && opponentChoice === 'scissors') ||
    (playerChoice === 'scissors' && opponentChoice === 'paper') ||
    (playerChoice === 'paper' && opponentChoice === 'rock')
  ) {
    return { player: playerChoice, opponent: opponentChoice, result: 'win' };
  }

  return { player: playerChoice, opponent: opponentChoice, result: 'lose' };
}

// Rock Paper Scissors Lizard Spock
function playRPSLS(playerChoice) {
  const validChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  const opponentChoice = validChoices[Math.floor(Math.random() * validChoices.length)];

  if (!playerChoice) {
    return { player: opponentChoice };
  }

  if (!validChoices.includes(playerChoice)) {
    return {
      error: `Invalid choice "${playerChoice}". Available choices are: ${validChoices.join(', ')}`,
    };
  }

  if (playerChoice === opponentChoice) {
    return { player: playerChoice, opponent: opponentChoice, result: 'draw' };
  }

  const winConditions = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['paper', 'spock'],
    spock: ['rock', 'scissors'],
  };

  if (winConditions[playerChoice].includes(opponentChoice)) {
    return { player: playerChoice, opponent: opponentChoice, result: 'win' };
  }

  return { player: playerChoice, opponent: opponentChoice, result: 'lose' };
}

module.exports = {
  playRPS,
  playRPSLS,
};
