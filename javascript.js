let playerScore = 0;
let computerScore = 0;
let tempPlayerSelection;
const btn = document.querySelectorAll('button');
btn.forEach(function(button){
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

function playRound() {
    const playerSelection = tempPlayerSelection;
    console.log("Player chose: " + playerSelection);
    const computerSelection = computerPlay();
    console.log("Computer chose: " + computerSelection);

    let roundWinner = determineWinner(playerSelection, computerSelection);

    if (roundWinner === "player") {

        console.log("You Win");
        return "player";

    }
    else if (roundWinner === "computer") {

        console.log("You Lose");
        return "computer";
    }
    else if (roundWinner === "tie") {

        console.log("Tie");
        return "tie";
    }


}

function game() {

    let playerScore = 0;
    let computerScore = 0;
    let ties = 0;

    
    for (let games = 0; games < 5; games++) {

        let result = playRound();

        if (result === "player") {
            playerScore++;
        }
        else if (result === "computer") {
            computerScore++;
        }
        else {
            ties++;
        }
    }

    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);
    console.log("Ties: " + ties);
    if (playerScore > computerScore) {
        return "You Win!";
    }
    else if (playerScore < computerScore) {
        return "You Lose!";
    }
}

container.addEventListener('click', () => playRound())
