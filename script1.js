//function to get the computer choice
function getCompChoice(){
    let rpsNumber = Math.floor(Math.random() * 3);
    if(rpsNumber == 0){
        return "rock";
    } else if (rpsNumber == 1){
        return "paper";
    } else {
        return "scissors";
    }
}

//function to check for a winner 
let humanScore = 0;
let computerScore = 0;
const gameEnd = document.querySelector("#game-end")
function checkWinner(){
    if(humanScore === 5){
        gameEnd.textContent = "You won the Game!!!";
        humanScore = 0;
        computerScore = 0;
    } else if(computerScore ===5){
        gameEnd.textContent = "You lost the Game! :(";
        humanScore = 0;
        computerScore = 0;
    } else{
        gameEnd.textContent = "";
    }
}

//function to update the scores
const scoreDisplay = document.querySelector("#score-display");
function updateScore(){
    scoreDisplay.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}


//function to play a round and show the result
const roundResult = document.querySelector(".round-result");
const roundDetails = document.querySelector(".round-details");
function playRound(humanChoice, computerChoice){
    // Tie situation
     if (humanChoice === computerChoice){
        roundResult.textContent = "It's a Tie!";
        roundDetails.textContent =  `You both chose ${humanChoice}.`;
        return 
     }
     // Using object literal to speed things up
     const winningPair = {
         rock: "scissors", paper: "rock", scissors: "paper"
     }
     if (winningPair[humanChoice] === computerChoice){
         humanScore++;
        roundResult.textContent = "You Win!";
        roundDetails.textContent =  `${humanChoice} beats ${computerChoice}.`;
     } else {
         computerScore++;
        roundResult.textContent = "You Lose!";
        roundDetails.textContent =  `${computerChoice} beats ${humanChoice}.`;
     }
     updateScore();
     checkWinner();
 }

 //creating a constant for the three buttons
 const rockBtn = document.querySelector("#rock");
 const paperBtn = document.querySelector("#paper");
 const scissorsBtn = document.querySelector("#scissors");
 
 //playing the game
 rockBtn.addEventListener("click", () => playRound("rock", getCompChoice()));
 paperBtn.addEventListener("click", () => playRound("paper", getCompChoice()));
 scissorsBtn.addEventListener("click", () => playRound("scissors", getCompChoice()));

 