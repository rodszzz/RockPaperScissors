// just to make my life easier
// i just log instead of console.log
// my wrists say thank you
function log(thing) {
  return console.log(thing);
}

function computerPlay() {
  // it picks a random number between 1 and 3
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  // a list of choices to the computer to choose from
  const computerChoice = ["rock", "paper", "scissors"];

  // ok so here's the magic
  // pick the random number -1 because
  // the list starts at 0 and not 1
  // so every time it gets called, new random choice!
  return computerChoice[randomNumber - 1];
}

// tracks the score of the computer and the player
let scorePC = 0;
let scorePlayer = 0;

function playRound(playerSelection, computerSelection) {
  // makes the playerSelection case-insensitive and only reads the first char
  playerSelection = playerSelection.toLowerCase().slice(0, 1);

  // checks the first char so its easier to type
  // doesnt matter typing if you type "rock" or "r" it's the same 🤠
  if (playerSelection === "r") {
    playerSelection = "rock";
  } else if (playerSelection === "s") {
    playerSelection = "scissors";
  } else if (playerSelection === "p") {
    playerSelection = "paper";
  }

  // only for debug purposes
  // but i'll keep it because i think its cooler with it
  // log(`You chose: ${playerSelection}`);

  // beeg switch function so it's readable
  // easier to debug for me and not too much spaghetti
  switch (true) {
    case computerSelection === playerSelection:
      results.innerHTML = `${computerSelection} does nothing to ${playerSelection}\nDRAW!`;
      break;

    case computerSelection === "rock" && playerSelection === "scissors":
      results.innerHTML = `${computerSelection} beats ${playerSelection}\nComputer Wins!`;
      score.innerHTML = `You: ${scorePlayer} </br> Computer: ${(scorePC += 1)}`;
      // scorePC += 1;
      break;

    case computerSelection === "rock" && playerSelection === "paper":
      results.innerHTML = `${playerSelection} beats ${computerSelection}\nYou Win!`;
      score.innerHTML = `You: ${(scorePlayer += 1)} </br> Computer: ${scorePC}`;
      // scorePlayer += 1;
      break;

    case computerSelection === "paper" && playerSelection === "scissors":
      results.innerHTML = `${playerSelection} beats ${computerSelection}\nYou Win!`;
      score.innerHTML = `You: ${(scorePlayer += 1)} </br> Computer: ${scorePC}`;
      // scorePlayer += 1;
      break;

    case computerSelection === "paper" && playerSelection === "rock":
      results.innerHTML = `${computerSelection} beats ${playerSelection}\nComputer Wins!`;
      score.innerHTML = `You: ${scorePlayer} </br> Computer: ${(scorePC += 1)}`;
      // scorePC += 1;
      break;

    case computerSelection === "scissors" && playerSelection === "rock":
      results.innerHTML = `${playerSelection} beats ${computerSelection}\nYou Win!`;
      score.innerHTML = `You: ${(scorePlayer += 1)} </br> Computer: ${scorePC}`;
      // scorePlayer += 1;
      break;

    case computerSelection === "scissors" && playerSelection === "paper":
      results.innerHTML = `${computerSelection} beats ${playerSelection}\nComputer Wins!`;
      score.innerHTML = `You: ${scorePlayer} </br> Computer: ${(scorePC += 1)}`;
      // scorePC += 1;
      break;

    default:
      // idk if it will ever occur, but i'll keep it here
      results.innerHTML = `ERROR\nPC:${computerSelection}\nYOU:${playerSelection}`;
      break;
  }
}

function game() {
  // calls playRound to play a round
  // use a for loop to play 5 rounds
  /* for (let i = 0; i < 5; i++) {
    // gets user input
    let playerSelection = prompt("Rock | Paper | Scissors: ");
    playRound(playerSelection, computerPlay());
  }
  // log the score of the player and computer
  log(`-----------------------------\nComputer: ${scorePC}`);
  log(`Player: ${scorePlayer}`); */
  // check who won and output it
  // idk how to get this workng
  if (scorePC > scorePlayer) {
    final.innerHTML = "YOU LOOOOOOOOOOOOOOOSE NEEEEEEEEEEEEEEEEEEEEERD";
  } else if (scorePC < scorePlayer) {
    final.innerHTML = "Congrats dud, you win :)";
  } else {
    final.innerHTML = "DRAW, best luck next time :)";
  }
}

const pedra = document.querySelector(".pedra");
const papel = document.querySelector(".papel");
const tesoura = document.querySelector(".tesoura");

pedra.addEventListener("click", () => playRound("rock", computerPlay()));
papel.addEventListener("click", () => playRound("paper", computerPlay()));
tesoura.addEventListener("click", () => playRound("scissors", computerPlay()));

const score = document.querySelector(".score");
const results = document.querySelector(".results");
const final = document.querySelector(".final");

// finally play the game
game();
