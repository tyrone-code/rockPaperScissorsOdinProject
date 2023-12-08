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

// Play the round
// Play the round
let computerScore = 0;
let userScore = 0;
function playRound() {
  for (i = 0; i < 3; i++) {
    let selection = prompt("type either rock, paper or scissors");
    let userSelection = selection.toLowerCase();
    let computerSelection = getComputerChoice();
    if (userSelection === computerSelection) {
      console.log(
        `it is a tie you chose ${userSelection} and the computer chose ${computerSelection}`
      );
      userScore += 0;
      console.log(`User: ${userScore}`);
      console.log(`Computer: ${computerScore}`);
    } else if (userSelection === "rock" && computerSelection === "scissors") {
      console.log(
        `you chose ${userSelection} and the computer chose ${computerSelection} you win!`
      );
      userScore += 1;
      console.log(`User: ${userScore}`);
      console.log(`Computer: ${computerScore}`);
    } else if (userSelection === "rock" && computerSelection === "paper") {
      console.log(
        `you chose ${userSelection} and the computer chose ${computerSelection} you lose!`
      );
      computerScore += 1;
      console.log(`User: ${userScore}`);
      console.log(`Computer: ${computerScore}`);
    }
  }
}
// } else if (userSelection === "rock" && computerSelection === "scissors") {
//   userScore += 1;
//   console.log(`user: ${userScore}`);
//   return "Computer chose scissors you chose rock you win!";
// } else if (userSelection === "rock" && computerSelection === "paper") {
//   return "Computer chose paper you chose rock you lose!";
// } else if (userSelection === "paper" && computerSelection === "rock") {
//   userScore += 1;
//   console.log(`user: ${userScore}`);
//   return "You chose paper computer chose rock, you win!";
// } else if (userSelection === "paper" && computerSelection === "scissors") {
//   return "You chose paper computer chose scissors, you lose!";
// } else if (userSelection === "scissors" && computerSelection === "rock") {
//   return "You chose scissors computer chose rock, you lose!";
// } else if (userSelection === "scissors" && computerSelection === "paper") {
//   userScore += 1;
//   console.log(`user: ${userScore}`);
//   return "You chose scissors computer chose paper, you win!";
// }
console.log(playRound());

// function roundScore() {

// let game = function () {
//   console.log(playRound());
// console.log(`Computer: ${computerScore}`);
//   console.log(`user: ${userScore}`);
//   console.log(playRound());
//   console.log(`Computer: ${computerScore}`);
// console.log(`user: ${userScore}`);
//   console.log(playRound());
//   console.log(`Computer: ${computerScore}`);
//   console.log(`user: ${userScore}`);
//   console.log(playRound());
//   console.log(`Computer: ${computerScore}`);
//   console.log(`user: ${userScore}`);
//   console.log(playRound());

//   console.log(`Computer: ${computerScore}`);
//   console.log(`user: ${userScore}`);
// };

// console.log(game());

// function roundScore() {
//   let playRound = "You win!";
//   if (playRound === "Tie!") {
//     computerScore += 0;
//   } else if (playRound === "You win!") {
//     userScore += 1;
//   } else if (playRoundResult === "You lose!") {
//     computerScore += 1;
//   }
//   console.log(`Computer: ${computerScore}`);
//   console.log(`user: ${userScore}`);
// }

// console.log(roundScore());
