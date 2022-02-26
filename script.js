
const choiceArray = ['rock', 'paper', 'scissors'];  

function computerPlay(){
    let x = Math.floor(Math.random() * 3);
    return choiceArray[x];
}

