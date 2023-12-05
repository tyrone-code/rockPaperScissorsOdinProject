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

// //Initialize variables
// let playerSelection = "rock";
// let computerChoice = getComputerChoice();

// // Function to repeat the play
// function playRound(playerSelection, computerChoice) {
//   if (playerSelection === "rock" && computerChoice === "scissors") {
//     console.log("Computer chose scissors you chose rock you win!");
//   }
// }

// playRound(playerSelection, computerChoice);
