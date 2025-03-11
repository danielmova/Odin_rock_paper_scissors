const choices = ["rock", "paper", "scissors"];

let humanScore = 0;

let computerScore = 0;


function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {

    promtChoice = prompt("Rock, paper or scissors?", "rock").toLowerCase();

    for (let i = 0; i < choices.length; i++) {
        if (promtChoice === choices[i]){
            promtChoice = choices[i];
        }
    }

    return promtChoice;
}

function playRound(humanChoice, computerChoice) {
    let winnerRound = "";
    if (humanChoice === computerChoice) {
        winnerRound = `Tie. ${humanChoice} vs ${computerChoice}`;
    }
    else if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            winnerRound = `Computer wins. ${humanChoice} vs ${computerChoice}`;
            computerScore++;
        } 
        else if (computerChoice == "scissors") {
            winnerRound = `Human wins. ${humanChoice} vs ${computerChoice}`;
            humanScore++;
        }
    }
    else if (humanChoice == "paper") {
        if (computerChoice == "scissors") {
            winnerRound = `Computer wins. ${humanChoice} vs ${computerChoice}`;
            computerScore++;
        }
        else if (computerChoice == "rock") {
            winnerRound = `Human wins. ${humanChoice} vs ${computerChoice}`;
            humanScore++;
        }
    }
    else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            winnerRound = `Computer wins. ${humanChoice} vs ${computerChoice}`;
            computerScore++;
        }
        else if (computerChoice == "paper") {
            winnerRound = `Human wins. ${humanChoice} vs ${computerChoice}`;
            humanScore++;
        }
    }

    return winnerRound;
}

let computerSelect = "";

let humanSelect = "";

function playGame(){

    let winnerGame = "";
    
    for (let i = 0; i < 5; i++) {
        computerSelect = getComputerChoice();
        humanSelect = getHumanChoice();

        console.log(playRound(humanSelect, computerSelect));
        console.log(`Human: ${humanScore} vs Computer: ${computerScore}`)
    }

    if (humanScore == computerScore){
        winnerGame = `Tie!. Human: ${humanScore} vs Computer: ${computerScore}`;
    }

    else if (humanScore < computerScore){
        winnerGame = `Computer wins the game. Human: ${humanScore} vs Computer: ${computerScore}`;
    }

    else if (humanScore > computerScore){
        winnerGame = `Human wins the game. Human: ${humanScore} vs Computer: ${computerScore}`;
    }

    return winnerGame;

}

console.log(playGame());