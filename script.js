function getComputerChoice () {
    const randomValue = Math.floor(Math.random() * 3);
    if(randomValue === 0) {
        return "rock";
    } else if (randomValue === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice () {
    const userInput = prompt("Enter rock 🪨 / paper 📰 / scissors ✂️");
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    }
    else {
        alert("Invalid Choice");
        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

function playGround(humanChoice, computerChoice) {
    if(humanChoice === "rock" && computerChoice === "scissors" ||
       humanChoice === "scissors" && computerChoice === "paper" ||
       humanChoice === "paper" && computerChoice === "rock") {
        alert(`You win 🏆 | (Human : ${humanChoice}) (Computer : ${computerChoice})`);
        humanScore++;
    } else if (humanChoice === computerChoice) {
        alert(`Game tie 🫂 | Both chose : ${humanChoice}`)
    } else {
        alert(`You loss the round | (Human : ${humanChoice}) (Computer : ${computerChoice})`);
        computerScore++;
    }
}

function playRound () {
    for(let i=0; i<5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playGround(humanChoice, computerChoice);
    }
    if (humanScore > computerScore) {
        alert(`You win the game 🏆! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    } else if (computerScore > humanScore) {
        alert(`Computer wins the game! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    } else {
        alert(`The game is a tie! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    }
}
playRound()