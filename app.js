let humanScore = 0; 
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();






// computer randomly selects rock paper or scissors;
function getComputerChoice() {
    let computerChoice = Math.floor((Math.random() * 3) + 1);
    if (computerChoice === 1) {
        computerChoice = 'rock'
    } else if (computerChoice === 2){
        computerChoice = 'paper'
    } else {
        computerChoice = 'scissors'
    }
    console.log(`computer choice: ${computerChoice}`)
    return computerChoice;
}

// user selects rock paper or scissors;
function getHumanChoice(){
    let humanInput = prompt("Rock, Paper, or Scissors?");
    let humanChoice = humanInput.toLowerCase();
    if (humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissors') {
        alert('that is an invalid choice')
    } else {
        console.log(`human choice: ${humanChoice}`)
    }
    return humanChoice;
}

// compare user choice and computer choice;
function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log(humanChoice)
    } else if(humanChoice === 'rock' && computerChoice === 'scissors'){
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`) 
    } else if(humanChoice === 'paper' && computerChoice === 'rock'){
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`) 
    } else if(humanChoice === 'scissors' && computerChoice === 'paper'){
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`) 
    } else{
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`) 
    }
    console.log(humanChoice)
}


playRound(humanSelection, computerSelection)
