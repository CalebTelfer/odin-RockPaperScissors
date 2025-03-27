/*
    case sensitive lowercase only for now
*/

//playGame();

const displayBox = document.querySelector("#display-box");
const resultText = document.querySelector("#resultText");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const scoreBoard = document.querySelector("#score");

rockButton.addEventListener("click", function() {playRound("rock", getComputerChoice())});
paperButton.addEventListener("click", function() {playRound("paper",  getComputerChoice())});
scissorsButton.addEventListener("click", function() {playRound("scissors", getComputerChoice())});

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    switch (humanChoice) {
        case "rock":
            if(computerChoice == "scissors") {
                displayBox.style.backgroundColor = "green";
                resultText.textContent = "You win! Rock beats Scissors!";
                humanScore++;
                updateScore();
                checkForWin();
            } else if(computerChoice == "paper") {
                displayBox.style.backgroundColor = "red";
                resultText.textContent = "You Lose! Scissors beats Rock!";
                computerScore++;
                updateScore();
                checkForWin();
            } else {
                displayBox.style.backgroundColor = "#202020";
                resultText.textContent = "Tie! Try again!";
            }
            break;
        
        case "paper":
            if(computerChoice == "rock") {
                displayBox.style.backgroundColor = "green";
                resultText.textContent = "You win! Paper beats Rock!";
                humanScore++;
                updateScore();
                checkForWin();
            } else if(computerChoice == "scissors") {
                displayBox.style.backgroundColor = "red";
                resultText.textContent = "You Lose! Scissors beats Paper!";
                computerScore++;
                updateScore();
                checkForWin();
            } else {
                displayBox.style.backgroundColor = "#202020";
                resultText.textContent = "Tie! Try again!";
            }
            break;

        case "scissors":
            if(computerChoice == "paper") {
                displayBox.style.backgroundColor = "green";
                resultText.textContent = "You win! Scissors beats Paper!";
                humanScore++;
                updateScore();
                checkForWin();
            } else if(computerChoice == "rock") {
                displayBox.style.backgroundColor = "red";
                resultText.textContent = "You Lose! Rock beats Scissors!"
                computerScore++;
                updateScore();
                checkForWin();
            } else {
                displayBox.style.backgroundColor = "#202020";
                resultText.textContent = "Tie! Try again!";
            }
            break;
    }
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let computerChoice;
    switch (choice) {
        case 0:
            computerChoice = "rock";
            break;
        
        case 1:
            computerChoice = "paper";
            break;

        case 2:
            computerChoice = "scissors";
            break;
    }

    return computerChoice;
}

function updateScore() {
    scoreBoard.textContent = "You " +humanScore+ " - " +computerScore + " Computer";
}

function checkForWin() {
    if (humanScore == 5) {
        resultText.textContent = ('You have won! Score = ' +humanScore+ ' - ' +computerScore);
        displayBox.style.backgroundColor = "pink";

        //reset game
        scoreBoard.textContent = "You 0 - 0 Computer";
        computerScore = 0;
        humanScore = 0;
        return;

    } else if (computerScore == 5) {
        displayBox.style.backgroundColor = "pink";
        resultText.textContent = ('You have lost! Score = ' +humanScore+ ' - ' +computerScore);

        //reset game
        scoreBoard.textContent = "You 0 - 0 Computer";
        computerScore = 0;
        humanScore = 0;
        return;
    }
}