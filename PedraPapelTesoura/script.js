let playerScore = 0;
let computerScore = 0;

const playerChoiceElem = document.getElementById("player-choice");
const computerChoiceElem = document.getElementById("computer-choice");
const playerScoreElem = document.getElementById("player-score");
const computerScoreElem = document.getElementById("computer-score");
const resultElem = document.getElementById("result");

const choices = ["rock", "paper", "scissors"];

document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));

function playRound(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    playerChoiceElem.textContent = playerChoice;
    computerChoiceElem.textContent = computerChoice;

    const result = getResult(playerChoice, computerChoice);
    displayResult(result);

    if (result === "Player Wins") {
        playerScore++;
    } else if (result === "Computer Wins") {
        computerScore++;
    }

    updateScore();
    
    setTimeout(resetRound, 3000);
}

function getResult(player, computer) {
    if (player === computer) {
        return "It's a Tie";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "Player Wins";
    } else {
        return "Computer Wins";
    }
}

function displayResult(result) {
    resultElem.textContent = result;
    resultElem.classList.remove("hidden");
}

function updateScore() {
    playerScoreElem.textContent = playerScore;
    computerScoreElem.textContent = computerScore;
}

function resetRound() {
    resultElem.classList.add("hidden");
    playerChoiceElem.textContent = "";
    computerChoiceElem.textContent = "";
}

