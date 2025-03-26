// Random choice function from "computer" generated with Math function.
function getComputerChoice() { 
    let random = Math.random() * 3;
    if (random <= 1) {
        return "rock";
    } else if (random <= 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Function to get user choice using prompt.
function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors? Your choice!").toLowerCase();
    if (choice == "rock" || choice == "paper" || choice == "scissors") {
        return choice;
    } else {
        alert("Error! Your choice is: 1. Rock 2. Paper 3. Scissors");
    }
}

let humanScore = 0; // Variable to track human score
let computerScore = 0; // Variable to track computer score

// Function to play an whole round of game, comparing human and computer choice and choosing winner of the round.
function playRound(humanChoice, computerChoice) {
    const human = getHumanChoice();
    const computer = getComputerChoice();

    if (human == "paper" && computer == "rock") {
        humanScore++;
        console.log(`${human} beats ${computer}! You Won!`)
        console.log(`Human ${humanScore} : ${computerScore} Computer`)
    } else if (human == "rock" && computer == "scissors") {
        humanScore++;
        console.log(`${human} beats ${computer}! You Won!`)
        console.log(`Human ${humanScore} : ${computerScore} Computer`)
    } else if (human == "scissors" && computer == "paper") {
        humanScore++;
        console.log(`${human} beats ${computer}! You Won!`)
        console.log(`Human ${humanScore} : ${computerScore} Computer`)
    } else if (human == computer) {
        console.log(`It's draw!`)
        console.log(`Human ${humanScore} : ${computerScore} Computer`)
    } else {
        computerScore++;
        console.log(`${computer} beats ${human}! You Lost!`)
        console.log(`Human ${humanScore} : ${computerScore} Computer`)
    }
}

// Function to play 5 rounds of the game using for loop.
function playGame() { 
    for (let i = 0; i < 5; i++) {
            playRound();
            console.log(`Round ${i + 1}`);
            console.log(`--------------`);
    }
}
