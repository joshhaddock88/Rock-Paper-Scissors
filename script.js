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
    const loseMessage = `The computer chose ${computerSelection}. You lose!`;
    const winMessage = `The computer chose ${computerSelection}. You win!`;
    const tieMessage = `The computer chose ${computerSelection}. It's a tie!`

    if (userSelection === rock) {
        if (computerSelection === paper) {
            alert(loseMessage);
            return('lose');
        } else if (computerSelection === scissors) {
            alert(winMessage);
            return('win');
        } else if (computerSelection === rock) {
            alert(tieMessage);
            return('tie');
        }
    } else if (userSelection === paper) {
        if (computerSelection === scissors) {
            alert(loseMessage);
            return('lose');
        } else if (computerSelection === rock) {
            alert(winMessage);
            return('win');
        } else if (computerSelection === paper) {
            alert(tieMessage);
            return('tie');
        }
    } else if (userSelection === scissors) {
        if (computerSelection === rock) {
            alert(loseMessage);
            return('lose');
        } else if (computerSelection === paper) {
            alert(winMessage);
            return('win');
        } else if (computerSelection === scissors) {
            alert(tieMessage);
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