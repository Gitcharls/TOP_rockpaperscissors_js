
const choiceArray = ['rock', 'paper', 'scissors'];  

function computerPlay(){
    let x = Math.floor(Math.random() * 3);
    return choiceArray[x];
}

// let computerSelection = computerPlay();
let computerSelection = 'rock';

let playerScore = 0;
let computerScore = 0;

function runGame(playerSelection,computerSelection){   
    if((playerSelection.toLowerCase() == 'rock' && computerSelection == 'rock') ||
    (playerSelection.toLowerCase() == 'paper' && computerSelection == 'paper') ||
    (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'scissors')){
        console.log('It\'s a tie!');
        console.log(`Player score: ${playerScore}`);
        console.log(`Computer Score ${computerScore}`);
    }   

    else if((playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') ||
    (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') ||
    (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper')){
        playerScore++;
        console.log(`Player won!... Player score: ${playerScore}`);
        console.log(`Computer Score ${computerScore}`);
    }

    else{
        computerScore++;
        console.log(`Computer won!... Computer score: ${computerScore}`)
        console.log(`Player score: ${playerScore}`);
        
    }
}


//  console.log(playerSelection);
//  console.log(computerSelection);

//  console.log(runGame(playerSelection,computerSelection));
//  console.log(playerScore);
//  console.log(computerScore);

function game(){
    for(let i=0; i < 5; i++){
        console.log(`Round ${i+1}!`);
        let playerSelection = prompt("Choose rock, paper, or scissors!");
        console.log(`Player choice: ${playerSelection}`);
        console.log(`Computer choice: ${computerSelection}`);
        runGame(playerSelection,computerSelection);
    }
    playerScore > computerScore ? console.log('Player is the alpha!') : console.log('Computer is the alpha!');
}

console.log(game());