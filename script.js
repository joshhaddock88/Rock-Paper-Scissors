//Create a function which will have computer generate random output of rock, paper or scissors
      /**So, what if I assigned rock paper scissors number values, and depend **/



const rock = document.getElementById('rock').value;
const paper = document.getElementById('paper').value;
const scissors = document.getElementById('scissors').value;
const buttons = document.querySelectorAll('button');

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
    const winMessage = `You win!`;
    const tieMessage = `It's a tie!`

    if (userSelection === rock) {
        if (computerSelection === paper) {
            outcome.innerText = 'You lose!'
            return('lose')
        } else if (computerSelection === scissors) {
            outcome.innerText = 'You win!'
            return('win');
        } else if (computerSelection === rock) {
            outcome.textContent = `It's a tie!`;
            return('tie');
        }
    } else if (userSelection === paper) {
        if (computerSelection === scissors) {
            outcome.innerText = 'You lose!'
            return('lose')
        } else if (computerSelection === rock) {
            outcome.innerText = 'You win!';
            return('win');
        } else if (computerSelection === paper) {
            outcome.innerText = `It's a tie!`;
            return('tie');
        }
    } else if (userSelection === scissors) {
        if (computerSelection === rock) {
            outcome.innerText = 'You lose!'
            return('lose')
        } else if (computerSelection === paper) {
            outcome.innerText = 'You win!';
            return('win');
        } else if (computerSelection === scissors) {
            outcome.innerText = `It's a tie!`;
            return('tie');
        }
    }
}

//Create a function that takes singleGame and iterates through it for 5 consecutive rounds
//At the beginning of each round it will output the round number and then run through the entire singGame function
//Alert user of winner
function fiveRoundGame(oneGame) {
    let win = 0;
    let lose = 0;
    //This tie option is kinda superflous. I just left it here in case I want to keep track of ties later down the road. But currenlty it's not being used.
    let tie = 0;
    for (round = 1; round <= 5; round++) {
        alert(`Round ${round}!`);
        let outCome = singleGame(userPlay(), computerPlay());
        if (outCome === 'win') {
            win += 1;
        } else if (outCome === 'lose') {
            lose += 1;
        } else if (outCome === 'tie') {
            tie += 1;
        }
        //endOfRound function has to go at end of loop, otherwise the score in the alert will always be one round behind
        let endOfRound = `End of Round ${round}! The score is Computer: ${lose} vs User: ${win}`
        alert(endOfRound);
    }
    if (win > lose) {
        alert("You win!");
    } else if (win === lose) {
        alert("It's a tie!");
    } else {
        alert("You lose!");
    }
}