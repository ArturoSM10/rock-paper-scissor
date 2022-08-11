let playerScore = 0,
    computerScore = 0,
    computerSelection = [`rock`,`paper`,`scissors`],
    currentGame,
    newGame = 0;

while (newGame === 0) {
    currentGame = game();
    console.log(currentGame);
    //Aditional delete later when interface is finished
    newGame = playAgain();
}

//function playAgain 
function playAgain() {
    newGame = prompt(`¿Do you want to play again? (Y/N)`).toLowerCase();
    if (newGame === `y`) {
        playerScore = 0;
        computerScore = 0;
        return 0;
    }
    else {
        return 1;
    }
}

//function getComputerChoice
function getComputerChoice() {
    let i = (Math.floor(Math.random()*3));
    return computerSelection[i];
}

//function playerSelection 
function playerSelection() {
    const userChoice = prompt(`Select one`).toLocaleLowerCase();
    return userChoice;
}

//function playRound 
function playRound(player, computer) {
    if (player === computer) {
        return `You got ${player} and computer got ${computer} so, no one wins`;
    }
    else if ((player === `rock` && computer === `scissors`) || 
            (player === `paper` && computer === `rock`) ||
            (player === `scissors` && computer === `paper`)) {
                return `You win ${player} beats ${computer}`;
            }
    else {
        return `You lose ${player} is beaten by ${computer}`;
    }
}

//function game 
function game(){
    let result;
    for (let i = 0; i<5; i++) {
        result = playRound(playerSelection(),getComputerChoice());
        console.log(result); //delete after the interface is finished
        if (result.includes(`You win`)) {
            playerScore += 1;
        }
        if (result.includes(`You lose`)) {
            computerScore += 1;
        }
    }
        if (playerScore > computerScore) {
            result = `You win ${playerScore} vs ${computerScore}`;
        }
        else if (playerScore < computerScore) {
            result = `You lose ${playerScore} vs ${computerScore}`;
        }
        else {
            result = `No one wins ${playerScore} vs ${computerScore}`;
        }
    return result;
    }