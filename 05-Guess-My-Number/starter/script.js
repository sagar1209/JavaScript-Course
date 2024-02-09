'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'currect Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 14;

// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.guess').value)

let secret_number = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

const displaymessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    highscore = 0;
    secret_number = Math.trunc(Math.random()*20)+1; 
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    displaymessage("Start guessing...");
    document.querySelector('.number').textContent = secret_number;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.highscore').textContent = highscore;


})

document.querySelector('.number').textContent = secret_number;
document.querySelector('.check').addEventListener('click',function(){
   const guess =  Number(document.querySelector('.guess').value);
   if(!guess){
    displaymessage("No Number!");
   }
   else if(guess === secret_number){
       displaymessage("Currect Number");

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'
        if(score>highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if(guess!== secret_number){
        if(score>1){
            score = score - 1;
            document.querySelector('.score').textContent = score;
            displaymessage(guess>secret_number?"Too High" : "Too Low");
         }
         else{
            document.querySelector('.message').textContent = "You Lose the game";
            document.querySelector('.score').textContent = 0;
         }
        
    }
})