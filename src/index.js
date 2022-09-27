import { Gameboard, Players, playerActive } from "./globalObject.js";
import {
  boxes,
  player1btn,
  player2btn,
  gameBoard,
  display,
  restartbtn
} from "./globalVariables.js";

if (playerActive.activePlayer === 1) {
  player1btn.style.backgroundColor = "red";
}

function switchPlayer(playerActive) {
  playerActive.activePlayer = playerActive.activePlayer === 1 ? 2 : 1;
  console.log(`Active player in switchPlayer is ${playerActive.activePlayer}`);
  player1btn.style.backgroundColor = `${
    playerActive.activePlayer === 1 ? "red" : "white"
  }`;
  player2btn.style.backgroundColor = `${
    playerActive.activePlayer === 2 ? "red" : "white"
  }`;
}

function checkForTie() {
  let isFull = true;
  outerLoop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (gameBoard[i][j] == "") {
        isFull = false;
        break outerLoop;
      }
    }
  }

  if (isFull !== false) {
    displayWinner("It is a Tie!");
  }
}

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", e => {
    // console.log(playerActive);
    // console.log(playerActive.playing); //why false when marking the box for the second time?

    //if the player still playing as in it is value true, allow users to keep playing
    if (playerActive.playing) {
      //prevents users from clicking a box that has been marked
      if (e.target.textContent !== "") {
        return;
      }

      //console.log(`Active Player in addEvent is ${playerActive.activePlayer}`);
      e.target.textContent = `${playerActive.activePlayer == 1 ? "X" : "O"}`;
      e.target.style.color = "white";
      e.target.style.fontSize = "50px";
      e.target.style.padding = "50px";

      let row;
      let column = i % 3;
      if (i >= 0 && i <= 2) {
        row = 0;
      } else if (i > 2 && i <= 5) {
        row = 1;
      } else {
        row = 2;
      }

      gameBoard[row][column] = playerActive.activePlayer === 1 ? "X" : "O";
      playerActive.counter += 1;
      console.log(`In addEvent ${playerActive.counter}`);
      checkGameBoard(gameBoard);
      switchPlayer(playerActive);
    }
  });
}

restartbtn.addEventListener("click", restartButton);

//does clear up but when try to play again, sometimes the box doesn't get marked
function restartButton() {
  console.log(playerActive);
  console.log(boxes);
  playerActive.activePlayer = 1;
  playerActive.playing = true;
  playerActive.counter = 0;
  console.log(playerActive.activePlayer);
  player1btn.style.backgroundColor = "red";
  player2btn.style.backgroundColor = "white";
  console.log("Inside restart button");
  // console.log(playerActive.activePlayer);
  display.textContent = "Let's Play!!";
  console.log(player1btn);
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].textContent = "";
  }

  //clearing up the gameboard
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameBoard[i][j] = "";
    }
  }
}

function displayWinner(message) {
  console.log(message);
  playerActive.playing = false;
  display.textContent = message;
  console.log(playerActive);
}

function checkGameBoard(gameBoard) {
  console.log(`In gameboard ${playerActive.counter}`);
  for (let i = 0; i < gameBoard.length; i++) {
    if (
      gameBoard[i][0] !== "" &&
      gameBoard[i][0] === gameBoard[i][1] &&
      gameBoard[i][0] === gameBoard[i][2]
    ) {
      if (gameBoard[i][0] === "X") {
        displayWinner("Player 1 won !!");
      } else {
        displayWinner("Player 2 won !!");
      }
    } else if (
      gameBoard[0][i] !== "" &&
      gameBoard[0][i] === gameBoard[1][i] &&
      gameBoard[0][i] === gameBoard[2][i]
    ) {
      if (gameBoard[0][i] === "X") {
        displayWinner("Player 1 won !!");
      } else {
        displayWinner("Player 2 won !!");
      }
    } else if (
      gameBoard[0][0] !== "" &&
      gameBoard[0][0] === gameBoard[1][1] &&
      gameBoard[0][0] === gameBoard[2][2]
    ) {
      if (gameBoard[0][0] === "X") {
        displayWinner("Player 1 won !!");
      } else {
        displayWinner("Player 2 won !!");
      }
    } else if (
      gameBoard[0][2] !== "" &&
      gameBoard[0][2] === gameBoard[1][1] &&
      gameBoard[0][2] === gameBoard[2][0]
    ) {
      if (gameBoard[0][2] === "X") {
        displayWinner("Player 1 won !!");
      } else {
        displayWinner("Player 2 won !!");
      }
    } else {
      if (playerActive.counter === 9) {
        checkForTie();
      }
    }
  }
}
