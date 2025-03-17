const choices = ["rock", "paper", "scissors"];

let humanScore = 0;

let computerScore = 0;

let rounds = 0;


function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(button_id) {

    const computerChoice = getComputerChoice();
    let humanChoice = button_id;
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

    console.log(winnerRound);
    rounds ++;

    if (rounds == 5){

        let winnerGame = "";

        if (humanScore == computerScore){
            winnerGame = `Tie!. Human: ${humanScore} vs Computer: ${computerScore}`;
        }
    
        else if (humanScore < computerScore){
            winnerGame = `Computer wins the game. Human: ${humanScore} vs Computer: ${computerScore}`;
        }
    
        else if (humanScore > computerScore){
            winnerGame = `Human wins the game. Human: ${humanScore} vs Computer: ${computerScore}`;
        }
        
        document.querySelector(".optionsContainer").style.display = "none";
        document.querySelector(".resoultsContainer").style.display = "block";
        console.log(winnerGame);
    }
}

let computerSelect = "";

let humanSelect = "";

function playGame(){
    humanScore = 0;
    computerScore = 0;
    rounds = 0;

    document.querySelector(".playGameContainer").style.display = "none";
    document.querySelector(".optionsContainer").style.display = "block";
}
