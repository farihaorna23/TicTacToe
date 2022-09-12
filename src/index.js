import { Gameboard, Players } from "./globalObject.js";
import { boxes, activePlayer, player1btn } from "./globalVariables.js";

console.log(activePlayer, player1btn);

//maybe put it in a function
//when start button is pressed, it will first start with player1
//so player1 will turn red
//before the game it should be white for both button
if (activePlayer === 1) {
  player1btn.style.backgroundColor = "red";
}

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", e => {
    console.log(e.target);
    e.target.textContent = `${activePlayer == 1 ? "X" : "O"}`;
    e.target.style.color = "white";
    e.target.style.fontSize = "50px";
    e.target.style.padding = "50px";

    //switch player
    //active player switches to player2
    activePlayer = `${activePlayer === 1 ? 2 : 1}`;
  });
}

//Uncaught TypeError: Assignment to constant variable. at HTMLDivElement.<anonymous> (index.js:24:1
//console.log(activePlayer);
