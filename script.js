const selection = [`rock`, `paper`, `scissors`];
let marker = [0, 0];
let index = 0;
game();

//function playerSelection 
function playerSelection () {
    const rpsBtns = document.querySelector(`.btn-container`);
    rpsBtns.addEventListener(`click`, (e) => {
        const humanImg = document.querySelector(`.main__images--human`);
        if (e.target && e.target.tagName === `BUTTON`) {
            if (e.target.id === `rock-btn`) {
                index = 0;
                humanImg.setAttribute(`src`,`./assets/img/rock-left.png`,`alt`,`rock image`);
            }
            else if (e.target.id === `paper-btn`) {
                index = 1;
                humanImg.setAttribute(`src`,`./assets/img/paper-left.png`,`alt`,`paper image`);
            }
            else {
                index = 2;
                humanImg.setAttribute(`src`,`./assets/img/scissors-left.png`,`alt`,`scissors image`);
            }
        }
    });
    return selection[index];
}

//function computerChoice
function computerChoice () {
    const platBtn = document.querySelector(`#play-btn`);
    const computerImg = document.querySelector(`.main__images--computer`);
    const computerSelection = selection[Math.floor(Math.random()*3)];
    if (computerSelection === `rock`) {
        computerImg.setAttribute(`src`,`./assets/img/rock-left.png`,`alt`,`rock image`);
    }
    else if (computerSelection === `paper`) {
        computerImg.setAttribute(`src`,`./assets/img/paper-left.png`,`alt`,`paper image`);
    }
    else {
        computerImg.setAttribute(`src`,`./assets/img/scissors-left.png`,`alt`,`scissors image`);
    }
    return computerSelection;
}

//function checkGame
function checkGame (player, computer) {
    const infoStatus = document.querySelector(`.main__images--status`);
    const scoreHuman = document.querySelector(`.marker__human`);
    const scoreComputer = document.querySelector(`.marker__computer`);
    if (player === computer) {
        infoStatus.textContent = `It is a tie`;
    }
    else if ((player === `rock` && computer === `scissors`) || (player === `paper` && computer === `rock`) || 
            (player === `scissors` && computer === `paper`)) {
        infoStatus.textContent = `You win ${player} beats ${computer}`;
        marker[0] += 1;
        scoreHuman.textContent = marker[0];
    }
    else {
        infoStatus.textContent = `You lose ${computer} beats ${player}`;
        marker[1] += 1;
        scoreComputer.textContent = marker[1];
    }
    return marker;
}

function game() {
    const playBtn = document.querySelector(`#play-btn`);
    playerSelection();
    playBtn.addEventListener(`click`, (e) => {
        marker = checkGame(selection[index], computerChoice());
        if (marker[0] === 5 || marker[1] === 5) {
            gameOverScreen();
        }
    });
    return;
}

//function gameOverScreen
function gameOverScreen() {
    const gameOver = document.querySelector(`.game-over__container`);
    const finalStatus = document.querySelector(`#final-status`);
    const gameOverBtn = document.querySelector(`.btn__game-over`);
    gameOver.setAttribute(`style`,`display: flex;`);
    if (marker[0] > marker[1]) {
        finalStatus.textContent = `You win`;
    }
    else {
        finalStatus.textContent = `You lose`;
    }
    gameOverBtn.addEventListener(`click`,(e) => {
        location.reload();
    });
}