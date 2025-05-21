//testing link to index
console.log("Hello World!");

//Function to get computer's choice
function getComputerChoice(){
    let rpsNumber = Math.floor(Math.random() * 3);
    if(rpsNumber == 0){
        return "Rock!";
    } else if (rpsNumber == 1){
        return "Paper!";
    } else {
        return "Scissors!";
    }

}
