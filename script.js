


const selection = [`rock`, `paper`, `scissors`];
let humanPoints = 0,
    computerPoints = 0,
    check = true;

playRound();

//function playerSelection 
function playerSelection() {
    let humanSelection = 0;
    const humanImg = document.querySelector(".human__choice");
    const rockBtn = document.querySelector("#rock-btn");
    const paperBtn = document.querySelector("#paper-btn");
    const scissorsBtn = document.querySelector("#scissors-btn");
    rockBtn.addEventListener(`click`, (e) => {
        humanImg.src = "./assets/img/rock-left.png";
        humanImg.alt = "Rock image";
        console.log(`user obtuvo ${selection[0]}`);
        return selection[0];
    });
    paperBtn.addEventListener(`click`, (e) => {
        humanImg.src = "./assets/img/paper-left.png";
        humanImg.alt = "Paper image";
        console.log(`user obtuvo ${selection[1]}`);
        return selection[1];
    });
    scissorsBtn.addEventListener(`click`, (e) => {
        humanImg.src = "./assets/img/scissors-left.png";
        humanImg.alt = "Scissors image";
        console.log(`user obtuvo ${selection[2]}`);
        return selection[2];
    });
    humanImg.alt.toLowerCase();
    if (humanImg.alt.includes(`rock`)) {
        return selection[0];
    }
    else if (humanImg.alt.includes(`Paper`)) {
        return selection[1];
    }
    else {
        return selection[2];
    }
}

//function computerChoice
function computerChoice () {
    let i = (Math.floor(Math.random()*3));
    const computerImg = document.querySelector(".computer__choice");
    if (check) {
        if (selection[i] === `rock`){
            computerImg.src = "./assets/img/rock-left.png";
            computerImg.alt = "Rock image";
        }
        else if (selection[i] === "paper") {
            computerImg.src = "./assets/img/paper-left.png";
            computerImg.alt = "Paper image"
        }
        else {
            computerImg.src = "./assets/img/scissors-left.png";
            computerImg.alt = "Scissors image";
        }
        return selection[i];
    }
    else {
        return selection[1];
    };
}

//function playRound 
function playRound () {
    const playBtn = document.querySelector("#play-btn");
    playBtn.addEventListener(`click`, (e) => {
        e.preventDefault();
        if (humanPoints < 5 && computerPoints < 5){
            check = true;
            result = checkPlay(playerSelection(), computerChoice());
            return !check;
        }
        else {
            const gameOverScreen = document.querySelector(".game-over__container");
            const playAgainBtn = document.querySelector(".btn__game-over");
            gameOverScreen.style = "display: flex;";
            playAgainBtn.addEventListener(`click`, (e) => {
                location.reload();
            });
        }
    });
    return check = false;
}

//function checkPlay 
function checkPlay(player, computer) {
    const status = document.querySelector(".info__status");
    const humanPointsMark = document.querySelector(".marker__human");
    const computerPointsMark = document.querySelector(".marker__computer");
    if (player === computer) {
        status.textContent = "Tie";
    }
    else if ((player === `rock` && computer === `scissors`) || 
            (player === `paper` && computer === `rock`) ||
            (player === `scissors` && computer === `paper`)) {
                status.textContent = "You win";
                humanPoints += 1;
                humanPointsMark.textContent = `${humanPoints}`;
                return humanPoints;
            }
    else {
        status.textContent = "You lose";
        computerPoints += 1;
        computerPointsMark.textContent = computerPoints;
        return computerPoints;
    }
}