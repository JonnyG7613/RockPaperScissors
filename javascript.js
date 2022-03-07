let selection = document.getElementsByClassName('selection');
let results = document.getElementById('results');
let totalGames = 0;
let playerScore = 0;
let computerScore = 0;
let playerScoreWins;
let computerScoreWins

// The computer makes their selection randomly
function computerSelection() {
    let selection = "rock"
    let random = parseInt((Math.random() * 100));
    if (random % 3 == 0) {
        selection = "paper";
    } else if (random % 3 == 1) {
        selection = "scissors";
    }
    return selection;
}

// The player makes their selection and then the winner is decided
function playerSelection(e) {
    let playerPick = this.id;
    if (playerPick === 'scissors') {
        winner('scissors', computerSelection());
    } else if (playerPick === 'rock') {
        winner('rock', computerSelection());
    } else {
        winner('paper', computerSelection());
    }
}

// A winner is selected after the choices are submitted.
function winner(player, computer) {
    const playerChoice = player;
    const computerChoice = computer;
    if (playerChoice === 'rock') {
        console.log(computerChoice);
        if (computerChoice === 'rock') {
            alert('You tie');
        } else if (computerChoice === 'paper') {
            alert('You lose');
            computerScore++;
        } else if (computerChoice === 'scissors') {
            alert('You win');
            playerScore++;
        }
    } else if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            alert('You win');
            playerScore++;
        } else if (computerChoice === 'paper') {
            alert('You tie');
        } else if (computerChoice === 'scissors') {
            alert('You lose');
            computerScore++;
        }
    } else {
        if (computerChoice === 'rock') {
            alert('You lose');
            computerScore++;
        } else if (computerChoice === 'paper') {
            alert('You win');
            playerScore++;
        } else if (computerChoice === 'scissors') {
            alert('You tie');
        }
    }
    totalGames++;
    if (playerScore === 1) {
        playerScoreWins = `${playerScore} win`;
        console.log(1);
    } else {
        playerScoreWins = `${playerScore} wins`;
    }
    if (computerScore === 1) {
        computerScoreWins = `${computerScore} win`;
    } else {
        computerScoreWins = `${computerScore} wins`;
    }
    if (totalGames == 1) {
        results.innerText = `You have ${playerScoreWins} and the computer has ${computerScoreWins} out of ${totalGames} game.`
    } else {
        results.innerText = `You have ${playerScoreWins} and the computer has ${computerScoreWins} out of ${totalGames} games.`;
    }
    if (playerScore === 5) {
        alert("You are the world's greatest RPS player!");
        reset();
    } else if (computerScore === 5) {
        alert("You are the world's worst RPS player! Womp womp!");
        reset();
    }
}

// Resets the score to 0 to 0 with 0 total games and displays such.
function reset() {
    playerScore = 0;
    computerScore = 0;
    totalGames = 0;
    results.innerText = "You have 0 wins and the computer has 0 wins out of 0 games.";
}

for (let i = 0; i < selection.length; i++) {
    selection[i].addEventListener('click', playerSelection);
}