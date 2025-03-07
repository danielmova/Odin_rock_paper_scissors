const choices = ["rock", "paper", "scissors"];

let humanScore = 0;

let computerScore = 0;

let pcChoice = "";

let humanChoice = "";

function getComputerChoice() {
    pcChoice = choices[Math.floor(Math.random() * choices.length)];
    return pcChoice;
}

console.log(getComputerChoice()); 

function getHumanChoice() {

    promtChoice = prompt("Rock, paper or scissors?", "rock");

    for (let i = 0; i < choices.length; i++) {
        if (promtChoice === choices[i]){
            humanChoice = choices[i];
        }
    }

    return humanChoice;
}

console.log(getHumanChoice());