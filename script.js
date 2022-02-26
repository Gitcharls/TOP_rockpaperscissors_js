
const choiceArray = ['rock', 'paper', 'scissors'];  

function computerPlay(){
    let x = Math.floor(Math.random() * 3);
    return choiceArray[x];
}

let computerSelection = computerPlay();
let playerSelection = prompt("Choose rock, paper, or scissors!");


function runGame(playerSelection,computerSelection){   
    if((playerSelection.toLowerCase() == 'rock' && computerSelection == 'rock') ||
    (playerSelection.toLowerCase() == 'paper' && computerSelection == 'paper') ||
    (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'scissors')){
        console.log('It\'s a tie!');
    }   

    else if((playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') ||
    (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') ||
    (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper')){
        console.log('Player won!');
    }

    else{
        console.log('Computer won!')
    }
}

console.log(playerSelection);
console.log(computerSelection);

console.log(runGame(playerSelection,computerSelection));