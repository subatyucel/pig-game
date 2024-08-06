'use strict';
const player0El = document.querySelector('.player--0'); //player 0 element
const player1El = document.querySelector('.player--1'); //player 1 element
const score0El = document.getElementById('score--0'); //score 0 element
const score1El = document.getElementById('score--1'); //score 1 element
const current0El = document.getElementById('current--0'); //current 0 element
const current1El = document.getElementById('current--1'); //current 1 element
const diceEl = document.querySelector('.dice'); //dice element
const btnNew = document.querySelector('.btn--new'); //new game button
const btnRoll = document.querySelector('.btn--roll'); //roll dice button
const btnHold = document.querySelector('.btn--hold'); //hold button
let currentScore = 0; //current score
let activePlayer = 0; //active player

//Initial values (at start)
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//functions
function rollDice() {
  //1- generate random number
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2- display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `./images/dice-${dice}.png`;

  //3- checks if dice is 1
  if (dice !== 1) {
    //add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //switch to the next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
}

//Rolling dice functionality
btnRoll.addEventListener('click', rollDice);

console.log(player0El);
