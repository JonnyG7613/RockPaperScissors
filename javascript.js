let selection = document.getElementsByClassName('selection');

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
        } else if (computerChoice === 'scissors') {
            alert('You win');
        }
    } else if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            alert('You win');
        } else if (computerChoice === 'paper') {
            alert('You tie');
        } else if (computerChoice === 'scissors') {
            alert('You lose');
        }
    } else {
        if (computerChoice === 'rock') {
            alert('You lose');
        } else if (computerChoice === 'paper') {
            alert('You win');
        } else if (computerChoice === 'scissors') {
            alert('You tie');
        }
    }
}

for (let i = 0; i < selection.length; i++) {
    selection[i].addEventListener('click', playerSelection);
}