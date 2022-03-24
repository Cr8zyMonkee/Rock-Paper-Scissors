let playerScore = 0;
let computerScore = 0;
let tempPlayerSelection;
const btn = document.querySelectorAll('button');
btn.forEach(function (button) {
    button.addEventListener('click', () => {
        tempPlayerSelection = button.getAttribute('id');
    });
});

function computerPlay() {
    const rndInt = randomIntFromInterval(1, 3);
    if (rndInt === 3)
        computerSelection = "rock";
    else if (rndInt === 2)
        computerSelection = "paper"
    else
        computerSelection = "scissors"

    return computerSelection;
}

function getPlayerSelection(string) {

    let selection = prompt("Rock, Paper, or Scissors?");


    if (selection.toLowerCase() === "rock")
        playerSelection = "rock";
    else if (selection.toLowerCase() === "paper")
        playerSelection = "paper";
    else if (selection.toLowerCase() === "scissors")
        playerSelection = "scissors";
    else
        alert("Please enter either Rock, Paper, or Scissors.")

    return playerSelection;
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function determineWinner(playerSelection, computerSelection) {

    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "player";
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {

        return "computer";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {

        return "computer";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {

        return "player";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {

        return "player";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {

        return "computer";
    }
    else
        return "tie";
}

function updateScore(divId, userScore) {
    document.getElementById(divId).textContent = userScore;
}

function playRound() {
    const playerSelection = tempPlayerSelection;
    const computerSelection = computerPlay();

    let roundWinner = determineWinner(playerSelection, computerSelection);

    if (roundWinner === "player") {

        return "player";

    }
    else if (roundWinner === "computer") {

        return "computer";
    }
    else if (roundWinner === "tie") {

        return "tie";
    }


}

function game() {

    let playerScore = 0;
    let computerScore = 0;
    let ties = 0;

    for (let i = 0; i < btn.length; i++) {
        btn[i].onclick = function () {
            if (playerScore === 5 || 
                computerScore === 5 ||
                ties === 5) {
                if (playerScore === 5) {
                    alert("You Win!");
                }
                else if (computerScore === 5) {
                    alert("You Lose!");
                }
                else if (ties === 5) {
                    alert("You Tie!");
                }
            } else {
                let result = playRound();
                if (result === "player") {
                    playerScore++;
                    updateScore('playerScore', playerScore);
                    return;
                }
                else if (result === "computer") {
                    computerScore++;
                    updateScore('computerScore', computerScore);
                    return;
                }
                else {
                    ties++;
                    updateScore('ties', ties);
                    return;
                }
            }
        }
    }

}
game();

