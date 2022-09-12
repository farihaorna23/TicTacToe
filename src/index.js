import { Gameboard, Players, playerActive } from "./globalObject.js";
import { boxes, player1btn, player2btn, gameBoard } from "./globalVariables.js";

console.log(playerActive.activePlayer, player1btn);
console.log(player2btn);

//maybe put it in a function
//when start button is pressed, it will first start with player1
//so player1 will turn red
//before the game it should be white for both button
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
  console.log("*********");
  console.log(player1btn);
  console.log(player2btn); //it is white. not red.
}

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", e => {
    //console.log(e.target);
    console.log(`Active Player in addEvent is ${playerActive.activePlayer}`);
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

    switchPlayer(playerActive);
  });
}

//Uncaught TypeError: Assignment to constant variable. at HTMLDivElement.<anonymous> (index.js:24:1
