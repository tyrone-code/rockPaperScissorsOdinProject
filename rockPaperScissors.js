// // Get random computer choice

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

// // Play the round
// // Play the round
// let computerScore = 0;
// let userScore = 0;
// function playRound() {
//   for (i = 0; i < 5; i++) {
//     let selection = prompt("type either rock, paper or scissors");
//     let userSelection = selection.toLowerCase();
//     let computerSelection = getComputerChoice();
//     if (userSelection === computerSelection) {
//       console.log(
//         `it is a tie you chose ${userSelection} and the computer chose ${computerSelection}`
//       );
//       userScore += 0;
//       console.log(`User: ${userScore}`);
//       console.log(`Computer: ${computerScore}`);
//     } else if (userSelection === "rock" && computerSelection === "scissors") {
//       console.log(
//         `you chose ${userSelection} and the computer chose ${computerSelection} you win!`
//       );
//       userScore += 1;
//       console.log(`User: ${userScore}`);
//       console.log(`Computer: ${computerScore}`);
//     } else if (userSelection === "rock" && computerSelection === "paper") {
//       console.log(
//         `you chose ${userSelection} and the computer chose ${computerSelection} you lose!`
//       );
//       computerScore += 1;
//       console.log(`User: ${userScore}`);
//       console.log(`Computer: ${computerScore}`);
//     } else if (userSelection === "paper" && computerSelection === "rock") {
//       console.log(
//         `you chose ${userSelection} and the computer chose ${computerSelection} you win!`
//       );
//       userScore += 1;
//       console.log(`User: ${userScore}`);
//       console.log(`Computer: ${computerScore}`);
//     } else if (userSelection === "paper" && computerSelection === "scissors") {
//       console.log(
//         `you chose ${userSelection} and the computer chose ${computerSelection} you lose!`
//       );
//       computerScore += 1;
//       console.log(`User: ${userScore}`);
//       console.log(`Computer: ${computerScore}`);
//     } else if (userSelection === "scissors" && computerSelection === "paper") {
//       console.log(
//         `you chose ${userSelection} and the computer chose ${computerSelection} you win!`
//       );
//       userScore += 1;
//       console.log(`User: ${userScore}`);
//       console.log(`Computer: ${computerScore}`);
//     } else if (userSelection === "scissors" && computerSelection === "rock") {
//       console.log(
//         `you chose ${userSelection} and the computer chose ${computerSelection} you lose!`
//       );
//       computerScore += 1;
//       console.log(`User: ${userScore}`);
//       console.log(`Computer: ${computerScore}`);
//     }
//   }
// }

// playRound();

// if (userScore > computerScore) {
//   alert(`Out of 5 games you win! Your score was ${userScore} and the computer score was ${computerScore}
//   congratulations! `);
// } else if (userScore < computerScore) {
//   alert(`Out of 5 games you lose! Your score was ${userScore} and the computer score was ${computerScore}
//   try Again!`);
// } else {
//   alert("it was a draw! Try again!");
// }
const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");

btnRock.addEventListener("click", playRoundDemo);
btnPaper.addEventListener("click", playRoundDemo);
btnScissors.addEventListener("click", playRoundDemo);

function playRoundDemo(e) {
  let id = e.target.id;
  let displayPara = document.querySelector("p");
  if (id === "btnRock") {
    displayPara.textContent = "Rock was clicked!";
  } else if (id === "btnPaper") {
    displayPara.textContent = "Paper was clicked!";
  } else {
    displayPara.textContent = "Scissors was clicked!";
  }
}
