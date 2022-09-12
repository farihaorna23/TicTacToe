import { Gameboard, Players } from "./globalObject.js";
import { boxes, activePlayer, player1btn } from "./globalVariables.js";

console.log(activePlayer, player1btn);

//maybe put it in a function
//when start button is pressed, it wukk first start with player1
//so player1 will turn red
//before the game it should be white for both button
if (activePlayer === 1) {
  player1btn.style.backgroundColor = "red";
}

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", e => {
    console.log(e);
  });
}
