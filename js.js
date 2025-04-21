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
};

// Function to get user choice using prompt.
function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors? Your choice!").toLowerCase();
    if (choice == "rock" || choice == "paper" || choice == "scissors") {
        return choice;
    } else {
        alert("Error! Your choice is: 1. Rock 2. Paper 3. Scissors");
    }
};

let humanScore = 0; // Variable to track human score
let computerScore = 0; // Variable to track computer score
let humanbtn;
// Function to play an whole round of game, comparing human and computer choice and choosing winner of the round.
function playRound(humanChoice, computerChoice) {
    const computer = getComputerChoice();



    if (humanbtn == "paper" && computer == "rock") {
        humanScore++;
        para.textContent = `${humanbtn} beats ${computer}! You Won!`;
        resultpara.textContent = `Human ${humanScore} : ${computerScore} Computer`;
    } else if (humanbtn == "rock" && computer == "scissors") {
        humanScore++;
        para.textContent = `${humanbtn} beats ${computer}! You Won!`;
        resultpara.textContent = `Human ${humanScore} : ${computerScore} Computer`;
    } else if (humanbtn == "scissors" && computer == "paper") {
        humanScore++;
        para.textContent = `${humanbtn} beats ${computer}! You Won!`;
        resultpara.textContent = `Human ${humanScore} : ${computerScore} Computer`;
    } else if (humanbtn == computer) {
        para.textContent = `It's draw!`;
        resultpara.textContent = `Human ${humanScore} : ${computerScore} Computer`;
    } else {
        computerScore++;
        para.textContent = `${computer} beats ${humanbtn}! You Lost!`;
        resultpara.textContent = `Human ${humanScore} : ${computerScore} Computer`;
    }

    if (humanScore === 5) {
        para.textContent = `HUMAN IS THE WINNER!`
        para.style.color = "green";
        para.style.fontSize = "15px";
        para.style.fontWeight = "800";
        btnrock.disabled = true;
        btnpaper.disabled = true;
        btnscissors.disabled = true;
        const resetbtn = document.createElement("button");
        result.appendChild(resetbtn);
        resetbtn.textContent = "NEW GAME";
        resetbtn.addEventListener("click", () => {window.location.reload();});
    } else if (computerScore === 5) {
        para.textContent = `COMPUTER IS THE WINNER!`
        para.style.color = "green";
        para.style.fontSize = "15px";
        para.style.fontWeight = "800";
        btnrock.disabled = true;
        btnpaper.disabled = true;
        btnscissors.disabled = true;
        const resetbtn = document.createElement("button");
        result.appendChild(resetbtn);
        resetbtn.textContent = "NEW GAME";
        resetbtn.addEventListener("click", () => {window.location.reload();});
    }
};

const content = document.querySelector(".content");
const btnrock = document.querySelector(".btn-rock");
const btnpaper = document.querySelector(".btn-paper");
const btnscissors = document.querySelector(".btn-scissors");

btnrock.textContent = "Rock";
btnrock.addEventListener("click", () => {
    humanbtn = "rock";
    playRound(humanbtn, getComputerChoice());
});

btnpaper.textContent = "Paper";
btnpaper.addEventListener("click", () => {
    humanbtn = "paper";
    playRound(humanbtn, getComputerChoice());
});

btnscissors.textContent = "Scissors";
btnscissors.addEventListener("click", () => {
    humanbtn = "scissors";
    playRound(humanbtn, getComputerChoice());
});

const result = document.querySelector("#result");
const para = document.createElement("p");
para.textContent = "";
const resultpara = document.createElement("p");
resultpara.textContent = "";
result.appendChild(para);
result.appendChild(resultpara);

// // Function to play 5 rounds of the game using for loop.
// function playGame() { 
//     for (let i = 0; i < 5; i++) {
//             playRound();
//             console.log(`Round ${i + 1}`);
//             console.log(`--------------`);
//     }
// }
