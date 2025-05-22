//testing link to index
//console.log("Hello World!");

//Function to get computer's choice
function getComputerChoice(){
    let rpsNumber = Math.floor(Math.random() * 3);
    if(rpsNumber == 0){
        return "rock";
    } else if (rpsNumber == 1){
        return "paper";
    } else {
        return "scissors";
    }
}


//Function that accepts human choice as an input
function getHumanChoice(){
    let humanChoice = prompt("Choose rock, paper, or scissors").toLowerCase();
    let text = "You chose " + humanChoice + "!";
    document.getElementById("game").innerHTML = text;
    return humanChoice;
}



//Function to play the whole five round games
function playGame(){
//Variables needed to keep score
let humanScore = 0;
let computerScore = 0;

//Function to play round
function playRound(humanChoice, computerChoice){
    // Tie situation
     if (humanChoice === computerChoice){
         drawText = "The Computer chose the same! It's a DRAW!!!"
         document.getElementById("game").innerHTML = drawText;
         return "The Computer chose the same! It's a DRAW!!!";
     }
     // using object literal to speed things up
     const winningPair = {
         rock: "scissors", paper: "rock", scissors: "paper"
     }
     //the actual round
     if (winningPair[humanChoice] === computerChoice){
         humanScore++;
         console.log(`You WIN!!! ${humanChoice} beats ${computerChoice}`);
         document.getElementById("game").innerHTML = `You WIN!!! ${humanChoice} beats ${computerChoice}`;
     } else {
         computerScore++;
         console.log(`You LOSE!!! ${computerChoice} beats ${humanChoice}`);
         document.getElementById("game").innerHTML = `You LOSE!!! ${computerChoice} beats ${humanChoice}`;
     }

 }
for (let round = 1; round<=5; round++){
    const humanSelection = getHumanChoice();
    const computerselection = getComputerChoice();
    playRound(humanSelection, computerselection);
    console.log("Your score is: " + humanScore + "\nThe Computer score is: " + computerScore);
}

if(humanScore > computerScore){
    console.log(`You WIN THE GAME!!! ${humanScore} to ${computerScore}`);
    document.getElementById("game").innerHTML = `You WIN THE GAME!!! ${humanScore} to ${computerScore}`;
    return
} else {
    console.log(`You LOSE THE GAME!!! ${computerScore} to ${humanScore}`);
    document.getElementById("game").innerHTML = `You LOSE THE GAME!!! ${computerScore} to ${humanScore}`;
    return
}
}