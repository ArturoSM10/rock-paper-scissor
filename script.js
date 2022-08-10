let computerChoice = (Math.floor(((Math.random())*3))+1);
let userChoice = prompt(`Select one`);
let r = getUserChoice(userChoice);
console.log(`tu resultado fue ${r} y el de la computadora fue ${computerChoice}`);
let  inputLower= userChoice.toLowerCase();

//Create function getComputerChoice

//Create function getUserChoice 
function getUserChoice(input="no valid option") {
    let  inputLower= input.toLowerCase();
    let result;
    if (inputLower==="rock") {
        result = 1;
    }
    else if (inputLower==="paper"){
        result = 2;
    }
    else if (inputLower==="scissor") {
        result= 3;
    }
    else {
        result = "no valid option";
    }
    return result;
}