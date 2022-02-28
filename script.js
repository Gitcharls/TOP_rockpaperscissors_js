
//Created an array literal for the computer choice
const choiceArray = ['rock', 'paper', 'scissors'];  

function computerPlay(){
    let x = Math.floor(Math.random() * choiceArray.length); //Variable x will have a random value with a maximum of the choiceArray length
    return choiceArray[x]; // Here, the x variable is used to return a string based on the random number
}

let computerSelection = computerPlay();


let playerScore = 0;
let computerScore = 0;

function runGame(playerSelection,computerSelection){   //Tests the winner out of two using conditional statements
    if((playerSelection === computerSelection)){
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

function game(){    //WIll iterate the game for 5 rounds and test the winner
        console.log(`Round ${i+1}!`); 
        let playerSelection = prompt("Choose rock, paper, or scissors!");
        console.log(`Player choice: ${playerSelection}`);
        console.log(`Computer choice: ${computerSelection}`);
        runGame(playerSelection,computerSelection);
    }
    playerScore > computerScore ? console.log('Player is the alpha!') : console.log('Computer is the alpha!'); // i used a ternary operator so it will show that the computer wins even if they have the same score for 5 rounds
    for(let i=0; i < 5; i++){
}

console.log(game());