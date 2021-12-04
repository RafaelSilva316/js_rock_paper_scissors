// console.log("working");

const choices = ["rock", "paper", "scissors"];
let pScore = 0;
let cScore = 0;
let round = 0;

function createP(phrase) {
  let newP = document.createElement("p");
  newP.innerText = phrase;
  theDiv = document.querySelector("div");
  theDiv.body.appendChild(newP);
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    console.log(this.innerHTML);

    winner = playRound(this.innerHTML, computerPlay(choices));
    console.log(winner[0]);
    game(this.innerHTML);
  });
});

function computerPlay(choices) {
  let computerSelection = choices[Math.floor(Math.random() * choices.length)];
  return computerSelection;
}

// console.log(computerPlay(choices));
function playRound(playerSelection, computerSelection) {
  let winnerMessage;
  let winner;
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    winnerMessage = "It's a tie! You both picked the same thing";
    winner = 0;
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      winnerMessage = `You Lose! ${computerSelection} beats ${playerSelection}`;
      winner = "computer";
    } else {
      winnerMessage = `You Win! ${playerSelection} beats ${computerSelection}`;
      winner = "player";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      winnerMessage = `You Lose! ${computerSelection} beats ${playerSelection}`;
      winner = "computer";
    } else {
      winnerMessage = `You Win! ${playerSelection} beats ${computerSelection}`;
      winner = "player";
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      winnerMessage = `You Lose! ${computerSelection} beats ${playerSelection}`;
      winner = "computer";
    } else {
      winnerMessage = `You Win! ${playerSelection} beats ${computerSelection}`;
      winner = "player";
    }
  }
  return [winnerMessage, winner];
}

function testFunctions() {
  const playerSelection = "rock";
  const computerSelection = computerPlay(choices);
  console.log("Your selection: " + playerSelection);
  console.log("Computer selection: " + computerSelection);
  console.log(playRound(playerSelection, computerSelection));
}

function game(playerSelection) {
  let winner;

  let computerSelection = computerPlay(choices);
  // console.log("Your selection: " + playerSelection);
  // console.log("Computer selection: " + computerSelection);
  document.getElementById(
    "your-choice"
  ).innerHTML = `You picked: ${playerSelection}`;
  document.getElementById(
    "computer-choice"
  ).innerHTML = `The Computer picked: ${computerSelection}`;
  round = playRound(playerSelection, computerSelection);
  console.log(round[0]);
  document.getElementById("round-winner").innerHTML = round[0];
  winner = round[1];
  if (winner == "player") {
    pScore++;
  }
  if (winner == "computer") {
    cScore++;
  }
  document.getElementById(
    "scoreboard"
  ).innerHTML = `player score: ${pScore} computer score: ${cScore}`;

  // console.log(`player score: ${pScore} computer score: ${cScore}`);
  if (pScore == 5) {
    document.getElementById("scoreboard").innerHTML = "You Win!";
  } else if (cScore == 5) {
    document.getElementById("scoreboard").innerHTML = "You Lose!";
  }
}
// game();
