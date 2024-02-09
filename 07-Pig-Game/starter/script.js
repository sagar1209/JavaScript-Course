'use strict';
let player0El = document.querySelector('.player--0');
let player1El = document.querySelector('.player--1');
let score0El = document.querySelector('#score--0');
let score1El = document.querySelector('#score--1');
let diceEl = document.querySelector('.dice');
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let current0El = document.querySelector('#current--0');
let current1El = document.querySelector('#current--1');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let score = [0,0];
let currentScore = 0;
let activeplayer = 0;

let playing = true;

const switchplayer = ()=>{
     currentScore = 0;
      activeplayer = (activeplayer==0)?1:0;
      current0El.textContent = 0;
      current1El.textContent = 0;  
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click',function(){
  if(playing){
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
  
    if(dice!==1){
       currentScore+=dice;
       document.querySelector(`#current--${activeplayer}`).textContent = currentScore; 
    }
    else{
       switchplayer();
    }
  }
});

btnHold.addEventListener('click',function(){
    if(playing){
        score[activeplayer] += currentScore;
        document.querySelector(`#score--${activeplayer}`).textContent = score[activeplayer];
        if(score[activeplayer]>=100){
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activeplayer}`).classList.add('player--winner'); 
            document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
            playing =false;
        }
        else{
           switchplayer(); 
        }
    }
})


btnNew.addEventListener('click',function(){
    playing = true;
    score[0] = 0;
    score[1] = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    activeplayer=0;
    diceEl.classList.add('hidden');
    currentScore = 0;
    current0El.textContent = 0;
    current1El.textContent = 0; 
    player0El.classList.remove('player--winner');
    player0El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');

})


