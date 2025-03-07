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
        else if (computerChoice = "rock") {
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

const computerSelect = getComputerChoice();

const humanSelect = getHumanChoice();

function playGame(){

    winnerGame = ""
    
    for (let i = 0; i < 5; i++) {
        playRound(humanSelect, computerSelect);
    }

    if (humanScore == computerScore){
        winnerGame = `Computer wins the game. ${humanSelect} vs ${computerSelect}`;
    }

}