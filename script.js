const choices = ["rock", "paper", "scissors"];

const resoultsPara = document.querySelector(".playGamePara");

const playGameBtnJs = document.querySelector("#playGameBtn");

const roundPara = document.querySelector(".optionsPara");

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
    else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            winnerRound = `Computer wins. ${humanChoice} vs ${computerChoice}`;
            computerScore++;
        } 
        else if (computerChoice === "scissors") {
            winnerRound = `Human wins. ${humanChoice} vs ${computerChoice}`;
            humanScore++;
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            winnerRound = `Computer wins. ${humanChoice} vs ${computerChoice}`;
            computerScore++;
        }
        else if (computerChoice === "rock") {
            winnerRound = `Human wins. ${humanChoice} vs ${computerChoice}`;
            humanScore++;
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            winnerRound = `Computer wins. ${humanChoice} vs ${computerChoice}`;
            computerScore++;
        }
        else if (computerChoice === "paper") {
            winnerRound = `Human wins. ${humanChoice} vs ${computerChoice}`;
            humanScore++;
        }
    }

    rounds ++;
    resoultsPara.innerText = winnerRound;
    roundPara.innerText = `Round ${rounds + 1} \nChose your weapon...`;
    



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
        
        playGameBtnJs.innerText = "Play again?";
        playGameBtnJs.style.display = "block";

        document.querySelector(".optionsContainer").style.display = "none";
        console.log(winnerGame);

        resoultsPara.innerText = winnerGame;
    }
}

let computerSelect = "";

let humanSelect = "";

function playGame(){
    humanScore = 0;
    computerScore = 0;
    rounds = 0;

    resoultsPara.innerText = "";
    roundPara.innerText = "Round 1 \n Chose your weapon...";

    playGameBtnJs.style.display = "none";
    document.querySelector(".optionsContainer").style.display = "block";
    document.querySelector(".resoultsContainer").style.display = "block";
    document.querySelector("#reestart").style.display = "none";
}
