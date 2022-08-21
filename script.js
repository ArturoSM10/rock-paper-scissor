



// const computerSelection = ["rock", "paper", "scissors"]; 
// let playerScore = 0,
//     computerScore = 0;
//     btnIsPressed = false;
// game(playerScore,computerScore);
// // function gameStart
// function gameStart() {
//     if (btnIsPressed === false) {
//         btnIsPressed = !btnIsPressed;
//     }
// }
// //function getComputerChoice
// function getComputerChoice() {
//     let i = (Math.floor(Math.random()*3));
//     const computerImg = document.querySelector(".computer__choice");
//     if (computerSelection[i] === "rock"){
//         computerImg.src = "./assets/img/rock-left.png";
//         computerImg.alt = "Rock image";
//     }
//     else if (computerSelection[i] === "paper") {
//         computerImg.src = "./assets/img/paper-left.png";
//         computerImg.alt = "Paper image"
//     }
//     else {
//         computerImg.src = "./assets/img/scissors-left.png";
//         computerImg.alt = "Scissors image";
//     }
//     return computerSelection[i];
// }

// //function playerSelection 
// function playerSelection() {
//     let humanSelection = 0;
//     const humanImg = document.querySelector(".human__choice");
//     const rockBtn = document.querySelector("#rock-btn");
//     const paperBtn = document.querySelector("#paper-btn");
//     const scissorsBtn = document.querySelector("#scissors-btn");
//     rockBtn.addEventListener("click", (e) => {
//         humanImg.src = "./assets/img/rock-left.png";
//         humanImg.alt = "Rock image";
//         humanSelection = 0;
//         gameStart();
//     });
//     paperBtn.addEventListener("click", (e) => {
//         humanImg.src = "./assets/img/paper-left.png";
//         humanImg.alt = "Paper image";
//         humanSelection = 1;
//         gameStart();
//     });
//     scissorsBtn.addEventListener("click", (e) => {
//         humanImg.src = "./assets/img/scissors-left.png";
//         humanImg.alt = "Scissors image";
//         humanSelection = 2;
//         gameStart();
//     });
//     return computerSelection[humanSelection];
// }

// //function playRound 
// function playRound(player, computer) {
//     const status = document.querySelector(".info__status");
//     let result;
//     if (player === computer) {
//         status.textContent = "Tie";
//         result = "tie";
//     }
//     else if ((player === `rock` && computer === `scissors`) || 
//             (player === `paper` && computer === `rock`) ||
//             (player === `scissors` && computer === `paper`)) {
//                 status.textContent = "You win";
//                 result = "You win";
//             }
//     else {
//         status.textContent = "You lose";
//         result = "You lose";
//     }
//     return result;
// }

// //function game 
// function game(playerScore, computerScore){
//     let result;
//     const humanPoints = document.querySelector(".marker__human");
//     const computerPoints = document.querySelector(".marker__computer");

//         result = playRound(playerSelection(),getComputerChoice());
//         if (result.includes(`You win`)) {
//             playerScore += 1;
//             computerScore = computerScore;
//             humanPoints.textContent = playerScore;
//         }
//         if (result.includes(`You lose`)) {
//             computerScore += 1;
//             playerScore = playerScore;
//             computerPoints.textContent = computerScore;
//         }
//     //delete or change
//     //     if (playerScore > computerScore) {
//     //         result = `You win ${playerScore} vs ${computerScore}`;
//     //     }
//     //     else if (playerScore < computerScore) {
//     //         result = `You lose ${playerScore} vs ${computerScore}`;
//     //     }
//     //     else {
//     //         result = `No one wins ${playerScore} vs ${computerScore}`;
//     //     }
//     // return result;
//     }































// let playerScore = 0,
//     computerScore = 0,
//     computerSelection = [`rock`,`paper`,`scissors`],
//     currentGame,
//     newGame = 0;

// while (newGame === 0) {
//     currentGame = game();
//     console.log(currentGame);
//     //Aditional delete later when interface is finished
//     newGame = playAgain();
// }

// //function playAgain 
// function playAgain() {
//     newGame = prompt(`¿Do you want to play again? (Y/N)`).toLowerCase();
//     if (newGame === `y`) {
//         playerScore = 0;
//         computerScore = 0;
//         return 0;
//     }
//     else {
//         return 1;
//     }
// }

// //function getComputerChoice
// function getComputerChoice() {
//     let i = (Math.floor(Math.random()*3));
//     return computerSelection[i];
// }

// //function playerSelection 
// function playerSelection() {
//     const userChoice = prompt(`Select one`).toLocaleLowerCase();
//     return userChoice;
// }

// //function playRound 
// function playRound(player, computer) {
//     if (player === computer) {
//         return `You got ${player} and computer got ${computer} so, no one wins`;
//     }
//     else if ((player === `rock` && computer === `scissors`) || 
//             (player === `paper` && computer === `rock`) ||
//             (player === `scissors` && computer === `paper`)) {
//                 return `You win ${player} beats ${computer}`;
//             }
//     else {
//         return `You lose ${player} is beaten by ${computer}`;
//     }
// }

// //function game 
// function game(){
//     let result;
//     for (let i = 0; i<5; i++) {
//         result = playRound(playerSelection(),getComputerChoice());
//         console.log(result); //delete after the interface is finished
//         if (result.includes(`You win`)) {
//             playerScore += 1;
//         }
//         if (result.includes(`You lose`)) {
//             computerScore += 1;
//         }
//     }
//         if (playerScore > computerScore) {
//             result = `You win ${playerScore} vs ${computerScore}`;
//         }
//         else if (playerScore < computerScore) {
//             result = `You lose ${playerScore} vs ${computerScore}`;
//         }
//         else {
//             result = `No one wins ${playerScore} vs ${computerScore}`;
//         }
//     return result;
//     }