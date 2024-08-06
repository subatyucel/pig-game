'use strict';
//DON ELEMENTS
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

//INIT VARIABLES
let scores, currentScore, activePlayer, playing;

//FUNCTIONS
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

function rollDice() {
  //checks if game is playable
  if (playing) {
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
      switchPlayer();
    }
  }
}

function holdScore() {
  if (playing) {
    //1- add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2- check if player's score alreayd at least 100
    if (scores[activePlayer] >= 20) {
      //3- finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //4- switch next player
      switchPlayer();
    }
  }
}

//FUNCTION CALLS
init();
btnRoll.addEventListener('click', rollDice); //adding event listener and handler to the roll button
btnHold.addEventListener('click', holdScore); //adding event listener and handler to the hold button
btnNew.addEventListener('click', init); //adding event listener and handler to the newgame button
