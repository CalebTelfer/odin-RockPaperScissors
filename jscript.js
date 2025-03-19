/*
    case sensitive lowercase only for now
*/

playGame();

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

function getHumanChoice() {
    let humanChoice = prompt("Choose Rock, Paper, or Scissors!");
    return humanChoice;
}

function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        console.log("New round! Score " + humanScore + " - " +computerScore);
        playRound(getHumanChoice(), getComputerChoice());
    }

    if(humanScore > computerScore) {
        console.log("You won! Score " + humanScore + " - " +computerScore);
    } else {
        console.log("You lost! Score " + humanScore + " - " +computerScore);
    }

    function playRound(humanChoice, computerChoice) {
        switch (humanChoice) {
            case "rock":
                if(computerChoice == "scissors") {
                    console.log("You win! Rock beats Scissors!");
                    humanScore++;
                } else if(computerChoice == "paper") {
                    console.log("You Lose! Paper beats Rock!");
                    computerScore++;
                } else {
                    console.log("Tie! Try again!");
                }
                break;
            
            case "paper":
                if(computerChoice == "rock") {
                    console.log("You win! Paper beats Rocks!");
                    humanScore++;
                } else if(computerChoice == "Scissors") {
                    console.log("You Lose! Scissors beats Paper!");
                    computerScore++;
                } else {
                    console.log("Tie! Try again!");
                }
                break;
    
            case "scissors":
                if(computerChoice == "paper") {
                    console.log("You win! Scissors beats Paper!");
                    humanScore++;
                } else if(computerChoice == "rock") {
                    console.log("You Lose! Rock beats Scissors!");
                    computerScore++;
                } else {
                    console.log("Tie! Try again!");
                }
                break;
        }
    }
}