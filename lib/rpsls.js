// Array of valid choices for RPS
const validChoicesRPS = ['rock', 'paper', 'scissors'];

// Array of valid choices for RPSLS
const validChoicesRPSLS = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

// Function to generate a random choice for RPS
function getRandomChoiceRPS() {
  const randomIndex = Math.floor(Math.random() * validChoicesRPS.length);
  return validChoicesRPS[randomIndex];
}

// Function to generate a random choice for RPSLS
function getRandomChoiceRPSLS() {
  const randomIndex = Math.floor(Math.random() * validChoicesRPSLS.length);
  return validChoicesRPSLS[randomIndex];
}

// Function to play RPS game
export function rps(playerChoice) {
  // If no player choice is provided, generate a random choice
  if (!playerChoice) {
    playerChoice = getRandomChoiceRPS();
    return { player:playerChoice };
  }

  // Convert player choice to lowercase for case insensitivity
  playerChoice = playerChoice.toLowerCase();

  // Validate player choice
  if (!validChoicesRPS.includes(playerChoice)) {
    throw new Error(`Invalid choice. Available options: ${validChoicesRPS.join(', ')}`);
  }

  // Generate a random choice for the opponent
  const opponentChoice = getRandomChoiceRPS();

  // Determine the game result
  let result;
  if (playerChoice === opponentChoice) {
    result = 'tie';
  } else if (
    (playerChoice === 'rock' && opponentChoice === 'scissors') ||
    (playerChoice === 'paper' && opponentChoice === 'rock') ||
    (playerChoice === 'scissors' && opponentChoice === 'paper')
  ) {
    result = 'win';
  } else {
    result = 'lose';
  }

  return { player:playerChoice,opponent:opponentChoice,result };
}

// Function to play RPSLS game
export function rpsls(playerChoice) {
  // If no player choice is provided, generate a random choice
  if (!playerChoice) {
    playerChoice = getRandomChoiceRPSLS();
    return { player:playerChoice };
  }

  // Convert player choice to lowercase for case insensitivity
  playerChoice = playerChoice.toLowerCase();

  // Validate player choice
  if (!validChoicesRPSLS.includes(playerChoice)) {
    throw new Error(`Invalid choice. Available options: ${validChoicesRPSLS.join(', ')}`);
  }

  // Generate a random choice for the opponent
  const opponentChoice = getRandomChoiceRPSLS();

  // Determine the game result
  let result;
  if (playerChoice === opponentChoice) {
    result = 'tie';
  } else if (
    (playerChoice === 'rock' && (opponentChoice === 'scissors' || opponentChoice === 'lizard')) ||
    (playerChoice === 'paper' && (opponentChoice === 'rock' || opponentChoice === 'spock')) ||
    (playerChoice === 'scissors' && (opponentChoice === 'paper' || opponentChoice === 'lizard')) ||
    (playerChoice === 'lizard' && (opponentChoice === 'paper' || opponentChoice === 'spock')) ||
    (playerChoice === 'spock' && (opponentChoice === 'rock' || opponentChoice === 'scissors'))
  ) {
    result = 'win';
  } else {
    result = 'lose';
  }

  return { player:playerChoice,opponent:opponentChoice,result };
}
