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
let computerPoints = 0;
let userPoints = 0;
let endScore = 5;

function playRoundDemo(e) {
  let id = e.target.id;
  let displayDiv = document.querySelector("#display");
  let computerSelection = getComputerChoice();
  let computerPointsDisplay = document.querySelector("#computerPoints");
  let userPointsDisplay = document.querySelector("#userPoints");
  let winnerText = document.querySelector("#winner");
  console.log(winnerText);

  //---------------------------------------------------------------------------------------------------

  if (computerPoints === 5) {
    winnerText.textContent = "You lose!";
    computerPoints = 0;
    userPoints = 0;
    userPointsDisplay.textContent = "0";
    computerPointsDisplay.textContent = "0";
  } else if (userPoints === 5) {
    winnerText.textContent = "You win!";
    computerPoints = 0;
    userPoints = 0;
    userPointsDisplay.textContent = "0";
    computerPointsDisplay.textContent = "0";
  } else if (id === "btnRock" && computerSelection === "rock") {
    winnerText.textContent = "";
    displayDiv.textContent = "it's a tie! No points awarded!";
  } else if (id === "btnRock" && computerSelection === "paper") {
    winnerText.textContent = "";
    computerPoints++;
    computerPoints.toString();
    computerPointsDisplay.textContent = computerPoints;
    displayDiv.textContent =
      "You chose rock! The computer chose paper! You lose!";
  } else if (id === "btnRock" && computerSelection === "scissors") {
    winnerText.textContent = "";

    userPoints++;
    userPoints.toString();
    userPointsDisplay.textContent = userPoints;
    displayDiv.textContent =
      "You chose rock! The computer chose scissors! You win!";
  } else if (id === "btnPaper" && computerSelection === "rock") {
    winnerText.textContent = "";

    userPoints++;
    userPoints.toString();
    userPointsDisplay.textContent = userPoints;
    displayDiv.textContent = "You chose paper the computer chose rock you win!";
  } else if (id == "btnPaper" && computerSelection === "paper") {
    winnerText.textContent = "";

    displayDiv.textContent = "It's a tie no points awarded!";
  } else if (id === "btnPaper" && computerSelection === "scissors") {
    winnerText.textContent = "";

    computerPoints++;
    computerPoints.toString();
    computerPointsDisplay.textContent = computerPoints;
    displayDiv.textContent =
      "You chose paper, computer chose scissors you lose!";
  } else if (id === "btnScissors" && computerSelection === "rock") {
    winnerText.textContent = "";

    computerPoints++;
    computerPoints.toString();
    computerPointsDisplay.textContent = computerPoints;
    displayDiv.textContent =
      "You chose scissors, computer chose rock! you lose!";
  } else if (id === "btnScissors" && computerSelection === "paper") {
    winnerText.textContent = "";

    userPoints++;
    userPoints.toString();
    userPointsDisplay.textContent = userPoints;
    displayDiv.textContent =
      "You chose scissors, computer chose paper you win!";
  } else if (id === "btnScissors" && computerSelection === "scissors") {
    winnerText.textContent = "";

    displayDiv.textContent = "it's a tie! No points awarded!";
  }
}

// computerPoints++;
// computerPoints.toString();
// computerPointsDisplay.textContent = computerPoints;
// displayDiv.textContent =
//   "You chose rock! The computer chose paper! You lose!";
