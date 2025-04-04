const choices = ["rock", "paper", "scissors"];

const resoultsPara = document.querySelector(".playGamePara");

const playGameBtnJs = document.querySelector("#playGameBtn");

const roundPara = document.querySelector(".optionsPara");

const odinPixelArtJs = document.querySelector("#odinPixelArt");

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
        odinPixelArtJs.src = "images/OdinIdle.gif";
        winnerRound = `Tie!\n ${humanChoice} vs ${computerChoice}`;
    }
    else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            odinPixelArtJs.src = "images/OdinWinRound.gif";
            winnerRound = `Odin Win this round!!!\n${humanChoice} vs ${computerChoice}`;
            computerScore++;
        } 
        else if (computerChoice === "scissors") {
            odinPixelArtJs.src = "images/OdinLooseRound.gif";
            winnerRound = `You Win this round...\n${humanChoice} vs ${computerChoice}`;
            humanScore++;
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            odinPixelArtJs.src = "images/OdinWinRound.gif";
            winnerRound = `Odin Win this round!!!\n${humanChoice} vs ${computerChoice}`;
            computerScore++;
        }
        else if (computerChoice === "rock") {
            odinPixelArtJs.src = "images/OdinLooseRound.gif";
            winnerRound = `You Win this round...\n${humanChoice} vs ${computerChoice}`;
            humanScore++;
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            odinPixelArtJs.src = "images/OdinWinRound.gif";
            winnerRound = `Odin Win this round!!!\n${humanChoice} vs ${computerChoice}`;
            computerScore++;
        }
        else if (computerChoice === "paper") {
            odinPixelArtJs.src = "images/OdinLooseRound.gif";
            winnerRound = `You Win this round...\n${humanChoice} vs ${computerChoice}`;
            humanScore++;
        }
    }
    rounds ++;
    console.log(`Round: ${rounds} Winner: ${winnerRound}`);

    resoultsPara.innerText = winnerRound;
    roundPara.innerText = `Round ${rounds + 1} \nChose your weapon...`;
    



    if (rounds == 5){

        let winnerGame = "";

        if (humanScore == computerScore){
            odinPixelArtJs.src = "images/OdinIdle.gif";
            winnerGame = `Tie!\n You: ${humanScore} vs Odin: ${computerScore}\nYou are a formidable opponent...`;
        }
    
        else if (humanScore < computerScore){
            odinPixelArtJs.src = "images/OdinWinGame.gif";
            winnerGame = `You Lose!!!\n You: ${humanScore} vs Odin: ${computerScore}\nOdin sees everything...`;
        }
    
        else if (humanScore > computerScore){
            odinPixelArtJs.src = "images/OdinLooseGame.gif";
            winnerGame = `Congratulations!!!\n You: ${humanScore} vs Odin: ${computerScore}\nYou Win!!!\n...\nFor now...`;
        }
        
        playGameBtnJs.style.display = "block";
        playGameBtnJs.innerText = "Play again?";

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
    odinPixelArtJs.src = "images/OdinIdle.gif";

    playGameBtnJs.style.display = "none";
    document.querySelector(".optionsContainer").style.display = "flex";
    document.querySelector(".resoultsContainer").style.display = "flex";
}
