// Constants
const RPS_OPTIONS = ["rock", "paper", "scissors"];
const RPSLS_OPTIONS = ["rock", "paper", "scissors", "lizard", "spock"];

// Function to generate a random choice
function getRandomChoice(options) {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// Function to determine the game result
function determineResult(playerChoice, opponentChoice, options) {
  const playerIndex = options.indexOf(playerChoice);
  const opponentIndex = options.indexOf(opponentChoice);

  if (playerIndex === opponentIndex) {
    return "tie";
  } else if (
    (playerIndex === 0 && opponentIndex === 2) ||
    (playerIndex === 1 && opponentIndex === 0) ||
    (playerIndex === 2 && opponentIndex === 1) ||
    (playerIndex === 0 && opponentIndex === 3) ||
    (playerIndex === 3 && opponentIndex === 4) ||
    (playerIndex === 4 && opponentIndex === 2) ||
    (playerIndex === 2 && opponentIndex === 3) ||
    (playerIndex === 3 && opponentIndex === 1) ||
    (playerIndex === 1 && opponentIndex === 4) ||
    (playerIndex === 4 && opponentIndex === 0)
  ) {
    return "win";
  } else {
    return "lose";
  }
}

// RPS function
export function rps(playerChoice) {
  if (!playerChoice) {
    playerChoice = getRandomChoice(RPS_OPTIONS);
    return {
      player:playerChoice,
    }
  }

  const opponentChoice = getRandomChoice(RPS_OPTIONS);
  const result = determineResult(playerChoice, opponentChoice, RPS_OPTIONS);

  return {
    player:playerChoice,
    opponent:opponentChoice,
    result,
  };
}

// RPSLS function
export function rpsls(playerChoice) {
  if (!playerChoice) {
    playerChoice = getRandomChoice(RPSLS_OPTIONS);
    return {
      player:playerChoice,
    }
  }

  const opponentChoice = getRandomChoice(RPSLS_OPTIONS);
  const result = determineResult(playerChoice, opponentChoice, RPSLS_OPTIONS);

  return {
    player:playerChoice,
    opponent:opponentChoice,
    result,
  };
}
