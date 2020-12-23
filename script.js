//Create a function which will have computer generate random output of rock, paper or scissors
      /**So, what if I assigned rock paper scissors number values, and depend **/


//Universal Variables
let round = 0;
let win = 0;
let lose = 0;
let tie = 0;
//The buttons on the page
const rock = document.getElementById('rock').value;
const paper = document.getElementById('paper').value;
const scissors = document.getElementById('scissors').value;
const buttons = document.querySelectorAll('button');
const restartButton = document.querySelector('#inputButton');
//Hides the reset button until five rounds are played
restartButton.style.display = 'none'
restartButton.addEventListener('click', () => {
    resetGame();
})
//A loop to play all rounds
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playSound(button.value);
        singleGame(button.value);
    })
})

function playSound(id) {
    const rockAudio = document.querySelector('#rockSound');
    const paperAudio = document.querySelector('#paperSound');
    const scissorsAudio = document.querySelector('#scissorsSound');
    if(round === 5) {
        return(false);
    } else {
    if(id === rock) {
        rockAudio.play();
    } else if(id === paper) {
        paperAudio.play();
    } else if(id === scissors) {
        scissorsAudio.play();
    }
}
}
//Resets round number, score, and makes reset button disappear.
function resetGame (e) {
    round = 0;
    win = 0;
    lose = 0
    tie = 0;
    const roundNumber = document.getElementById('round');
    const intro = document.getElementById('intro');
    const computer = document.getElementById('computer');
    const outcome = document.getElementById('outcome');
    const winNumber = document.getElementById('win');
    const lossNumber = document.getElementById('loss');
    const tieNumber = document.getElementById('tie');
    intro.innerText = 'Five Rounds';
    computer.innerText = 'One winner';
    outcome.innerText = 'Make your choice';
    roundNumber.innerText = `Round: ${round}`;
    winNumber.innerText = `Win: ${win}`;
    lossNumber.innerText = `Lose: ${lose}`;
    tieNumber.innerText = `Tie: ${tie}`;
    restartButton.style.display = 'none';
}


function computerPlay(randomChoice) {
    let choices = [rock, paper, scissors];
    randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

// Create a function which prompts user and generates a random output from the computer.
//Compare the value based on rock > scissors, scissors > paper, paper > rock. How to do that?
/**So, I could just compare all the option but that seems like a lot. **/
function singleGame(userSelection) {
    let computerSelection = computerPlay();
    const intro = document.getElementById('intro');
    intro.innerText = "The computer chose";
    const computer = document.getElementById('computer');
    computer.innerText = `${computerSelection}`;
    const outcome = document.getElementById('outcome');
    const roundNumber = document.getElementById('round');
    const winNumber = document.getElementById('win');
    const lossNumber = document.getElementById('loss');
    const tieNumber = document.getElementById('tie');
    

    if(round === 5) {
        intro.innerText = "Press button to play again";
        computer.innerText = 'the one below...';
        outcome.innerText = 'further down...';
        restartButton.value = 'This buttonzz'
    } else {
        if (userSelection === rock) {
            if (computerSelection === paper) {
                outcome.innerText = 'You lose!'
                lose += 1;
                lossNumber.innerText = `Lose: ${lose}`;
            } else if (computerSelection === scissors) {
                outcome.innerText = 'You win!'
                win += 1;
                winNumber.innerText = `Win: ${win}`;
            } else if (computerSelection === rock) {
                outcome.innerText = `It's a tie!`;
                tie += 1;
                tieNumber.innerText = `Tie: ${tie}`;
            }
        } else if (userSelection === paper) {
            if (computerSelection === scissors) {
                outcome.innerText = 'You lose!'
                lose += 1;
                lossNumber.innerText = `Lose: ${lose}`;
            } else if (computerSelection === rock) {
                outcome.innerText = 'You win!';
                win += 1;
                winNumber.innerText = `Win: ${win}`;
            } else if (computerSelection === paper) {
                outcome.innerText = `It's a tie!`;
                tie += 1;
                tieNumber.innerText = `Tie: ${tie}`;
            }
        } else if (userSelection === scissors) {
            if (computerSelection === rock) {
                outcome.innerText = 'You lose!'
                lose += 1;
                lossNumber.innerText = `Lose: ${lose}`;
            } else if (computerSelection === paper) {
                outcome.innerText = 'You win!';
                win += 1;
                winNumber.innerText = `Win: ${win}`;
            } else if (computerSelection === scissors) {
                outcome.innerText = `It's a tie!`;
                tie += 1;
                tieNumber.innerText = `Tie: ${tie}`;
            }
        }
        round += 1;
        roundNumber.innerText = `Round: ${round}`
        if(round === 5) {
            restartButton.style.display = 'flex';
            restartButton.value = 'Play again?'
            intro.innerText = 'Game Over';
        if(win > lose) {
            computer.innerText = 'You have won!';
            outcome.innerText = 'Congratulations!';
        } else if (lose > win) {
            computer.innerText = 'Oh, you lost...';
            outcome.innerText = 'I am so, so sorry...';
        } else if (tie > win && tie > lose) {
            computer.innerText = 'My, my, my,'
            outcome.innerText = 'Somehow you tied...'
        }
        }     
    }
}
