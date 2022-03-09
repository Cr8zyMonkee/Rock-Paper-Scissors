let playerScore = 0;
            let computerScore = 0;


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

            function getPlayerSelection() {

                const buttons = document.querySelectorAll('button');
                buttons.forEach((button) => {
                    button.addEventListener('click', () => {
                        return button.id;
                    })
                })
            }

            function randomIntFromInterval(min,max) {
                return Math.floor(Math.random() * (max - min +1) + min);
            }
            function determineWinner(playerSelection, computerSelection){

                if (playerSelection === "rock" && computerSelection === "scissors"){
                   return "player";
                }
                else if(playerSelection === "rock" && computerSelection === "paper"){
                    
                   return "computer";
                }
                else if (playerSelection === "paper" && computerSelection === "scissors"){
                    
                   return "computer";
                }
                else if (playerSelection === "paper" && computerSelection === "rock"){
                    
                   return "player";
                }
                else if (playerSelection === "scissors" && computerSelection === "paper"){
                    
                   return "player";
                }
                else if (playerSelection === "scissors" && computerSelection === "rock"){
                
                   return "computer";
                }
                else
                    return "tie";
            }

            function playRound() {

                const playerSelection = getPlayerSelection();
                console.log("Player chose: " + playerSelection);
                const computerSelection = computerPlay();
                console.log("Computer chose: " + computerSelection);

                let roundWinner = determineWinner(playerSelection, computerSelection);

                if (roundWinner === "player"){

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

            document.getElementsByTagName('button').onclick = playRound();