function computerPlay() {
    let selection = "rock"
    let random = parseInt((Math.random()*100));
    if (random % 3 == 0) {
        selection = "paper";
    } else if (random % 3 == 1) {
        selection = "scissors";
    }
    return selection;
}

function playerPlay() {
    let playerChoice = window.prompt("Rock, paper or scissors?");
    return (playerChoice);
}

function winner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return(`Both the player and computer picked ${playerSelection}. `);
    } else if (playerSelection === "rock") {
        switch (computerSelection) {
            case "scissors":
                return("The player wins this round. Rock beats scissors. ");
            case "paper":
                return("The computer wins this round. Paper beats rock. ");
        }
    } else if (playerSelection === "scissors") {
        switch (computerSelection) {
            case "paper":
                return("The player wins this round. Scissors beats paper. ");
            case "rock":
                return("The computer wins this round. Rock beats scissors. ");
        }
    } else {
        switch (computerSelection) {
            case "rock":
                return("The player wins this round. Paper beats rock. ");
            case "scissors":
                return("The computer wins this round. Scissors beats paper. ");
        }
    }
}

function main() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = playerPlay();
        if (playerSelection == null) {
            alert("Now I'm sad");
            break;
        } else {
            playerSelection = playerSelection.toLocaleLowerCase();
            if ((playerSelection == "rock") || (playerSelection == "paper") || (playerSelection == "scissors")) {
                const computerSelection = computerPlay();
                let rpsWinner = winner(playerSelection, computerSelection);
                console.log(`player pics ${playerSelection}`)
                console.log(`comp picks ${computerSelection}`);
                if (rpsWinner[4] == "p") {
                    playerScore++;
                } else if (rpsWinner[4] == "c") {
                    computerScore++;
                } else {
                    i--;
                }
                alert(`${rpsWinner}The score is player ${playerScore} and computer ${computerScore}`);
            } else {
                alert("Please enter either rock, paper or scissors.");
                i--;
           }
        }
    }
    alert(`The final score is player ${playerScore} and computer ${computerScore}`)
}
