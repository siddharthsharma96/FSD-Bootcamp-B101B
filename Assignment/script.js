"use strict";
let player1 = document.querySelector(".player--0");
let player2 = document.querySelector(".player--1");

let player1ScoreEl = document.querySelector("#score--0");
let player2ScoreEl = document.querySelector("#score--1");

let current1ScoreEl = document.querySelector("#current--0");
let current2ScoreEl = document.querySelector("#current--1");

let diceEl = document.querySelector(".dice");
let resetBtnEl = document.querySelector(".btn--new");
let rollBtnEl = document.querySelector(".btn--roll");
let holdBtnEl = document.querySelector(".btn--hold");

let score1, score2, currentScore, activePlayer, playing;

let init = () => {
  score1 = 0;
  score2 = 0;
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  player1ScoreEl.textContent = 0;
  player2ScoreEl.textContent = 0;
  current1ScoreEl.textContent = 0;
  current2ScoreEl.textContent = 0;
  diceEl.classList.add("hidden");
  player1.classList.remove("player--winner");
  player2.classList.remove("player--winner");
  player1.classList.add("player--active");
  player2.classList.remove("player--active");
};
init();

resetBtnEl.addEventListener("click", init);

let changePlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle("player--active");
  player2.classList.toggle("player--active");
};

let rollDice = () => {
  if (playing) {
    let randomNumber = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `dice-${randomNumber}.png`;
    diceEl.classList.remove("hidden");
    if (randomNumber != 1) {
      currentScore = currentScore + randomNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      changePlayer();
    }
  }
};

let updateScore = (score, scoreEl, player) => {
  score += currentScore;
  scoreEl.textContent = score;
  if (score >= 20) {
    playing = false;
    diceEl.classList.add("hidden");
    player.classList.add("player--winner");
    player.classList.remove("player--active");
  } else {
    changePlayer();
  }
  return score;
};

console.log(player1ScoreEl.textContent);
let hold = () => {
  if (playing) {
    if (activePlayer == 0) {
      // score1 = score1 + currentScore;
      score1 += currentScore;
      player1ScoreEl.textContent = score1;
      if (score1 >= 20) {
        playing = false;
        diceEl.classList.add("hidden");
        player1.classList.add("player--winner");
        player1.classList.remove("player--active");
      } else {
        changePlayer();
      }
      // score1 = updateScore(score1, player1ScoreEl, player1);
      // console.log(score1);
    } else {
      score2 += currentScore;
      player2ScoreEl.textContent = score2;
      if (score2 >= 20) {
        playing = false;
        diceEl.classList.add("hidden");
        player2.classList.add("player--winner");
        player2.classList.remove("player--active");
      } else {
        changePlayer();
      }
    }
  }
};

rollBtnEl.addEventListener("click", rollDice);
holdBtnEl.addEventListener("click", hold);
