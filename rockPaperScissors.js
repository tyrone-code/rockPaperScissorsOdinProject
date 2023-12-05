// Get random computer choice

let getComputerChoice = function () {
  let randNum = Math.floor(Math.random() * 3) + 1;
  let rock = 1;
  let paper = 2;
  let scissors = 3;
  if (randNum === rock) {
    return "rock";
  } else if (randNum === paper) {
    return "paper";
  } else {
    return "scissors";
  }
};

//Initialize variables
let selection = "scISSORS";
let playerSelection = selection.toLowerCase();
let computerSelection = getComputerChoice();
// Function to repeat the play
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `it is a tie you chose ${playerSelection} and the computer chose ${computerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "Computer chose scissors you chose rock you win!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "Computer chose paper you chose rock you lose!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You chose paper computer chose rock, you win!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You chose paper computer chose scissors, you lose!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You chose scissors computer chose rock, you lose!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You chose scissors computer chose paper, you win!";
  }
}

playRound(playerSelection, computerSelection);
