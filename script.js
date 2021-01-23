//query selectors
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorBtn = document.querySelector('#scissor');
const scoreBox = document.querySelector('.score-box');
const compSelect = document.querySelector ('.computerOutputBox');





let playerScore = 0;
let computerScore = 0;
let round = 0;
let question = '';
let playerSelection = '';
let computerSelection = '';

let button1 = document.querySelector('#button');




function computerPlay(){
  let x = Math.floor(Math.random() *3+1);
  switch (x) {
  case 1:
  x = 'rock';
  break;
  case 2:
  x = 'paper';
  break;
  case 3:
  x = 'scissor';
  break;
  }
  return x
  
} 

function playRound(playerSelection, computerSelection){   
    question = prompt('Rock, Paper, Scissor?');
    playerSelection = question.toLowerCase();
    computerSelection = computerPlay(); 
  if (playerSelection === computerSelection){
    round+=1;
    return(`${playerSelection} tied ${computerSelection}
    Player: ${playerScore} 
    Computer: ${computerScore}
    Round:${round}`);
  }else if (playerSelection === 'rock' && computerSelection === 'scissor'||
             playerSelection === 'paper' && computerSelection === 'rock' ||
             playerSelection === 'scissor' && computerSelection === 'paper'){
     round += 1;           
     playerScore+=1;
     return(`${playerSelection} beats ${computerSelection} 
     Player score: ${playerScore} 
     Computer score: ${computerScore} 
     Round:${round}`);
  } else {
    round += 1;
    computerScore+=1;
    return(`${computerSelection} beats ${playerSelection}
    Computer score ${computerScore} 
    Player Score: ${playerScore} 
    Round:${round}`);
  }
};


function game(){
    for(i=0; i<5; i++){
        console.log(playRound())}
        if(playerScore > computerScore){
            console.log('Game Over. Player Wins');
        }else if (computerScore > playerScore){
            console.log( `Game Over. Computer Wins with ${computerScore}`);
        } else if (playerScore === computerScore){
            console.log('Tied!');
        } else {
            return 'Bad Game'
        }
    };


function playAgain(){
    let questionTwo = prompt('Do You want to play again? Y/N');
    let answer = questionTwo.toLowerCase();
    if(answer === 'y'){
        return game();
    }else {
        console.log('Goodbye');
    }
  }

game();
playAgain();











