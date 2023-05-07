const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");

const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (event)=> {
    userChoice = event.target.id
    userChoiceDisplay.innerHTML = userChoice;

    generateComputerChoice();
    getresult();
}))

function generateComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if(randomNumber == 1) {
        computerChoice = "rock";
    }

    if(randomNumber === 2) {
        computerChoice = "paper";
    }

    if(randomNumber === 3) {
        computerChoice = "scissors";
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getresult(){
    if(computerChoice === userChoice){
        result = "Draw !";
        resultDisplay.style.color = "blue";
    } else if(computerChoice === "rock" && userChoice ==="paper"){
        result = "You Win !";
        resultDisplay.style.color = "green";
    }else if(computerChoice === "rock" && userChoice ==="scissors"){
        result = "You Lost !"; 
        resultDisplay.style.color = "red";
    } else if(computerChoice === "paper" && userChoice ==="rock"){
        result = "You Lost !";
        resultDisplay.style.color = "red";
    } else if(computerChoice === "paper" && userChoice ==="scissors"){
        result = "You Win !";
        resultDisplay.style.color = "green";
    } else if(computerChoice === "scissors" && userChoice ==="rock"){
        result = "You Win !";
        resultDisplay.style.color = "green";
    } else if(computerChoice === "scissors" && userChoice ==="paper"){
        result = "You Lost !";
        resultDisplay.style.color = "red";
    }

    resultDisplay.innerHTML = result;
}