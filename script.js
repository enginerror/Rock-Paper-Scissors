const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorBtn = document.querySelector("#scissorBtn");
const playerChoiceImage = document.querySelector("#playerChoiceImage");
const robotChoiceImage = document.querySelector("#robotChoiceImage");
const result = document.querySelector("#result");
const playerScoreBoard = document.querySelector("#playerScoreBoard");
const robotScoreBoard = document.querySelector("#robotScoreBoard");
const finalResult = document.querySelector("#finalResult");
const popup = document.querySelector("#popup");
const closeBtn = document.querySelector("#closeBtn");
const finalResult_playerScore = document.querySelector("#finalResult-playerScore");
const finalResult_robotScore = document.querySelector("#finalResult-robotScore");
const start_popup = document.querySelector("#start-popup");
const startBtn = document.querySelector("#startBtn");
const clickSound = document.querySelector("#clickSound");

        /*   -- start popup Section --   */


startBtn.onclick = () => {
    start_popup.style.display = "none";
}

        /*   -- Player Play Section --   */

// images for choice
const choice = {
    rock: "./public/stone.png",
    paper: "./public/scroll.png",
    scissor: "./public/scissor.png",
};

        /*   -- Robot Play Section --   */

// function for robot choice
function robotPlay () {
    const option = ["rock", "paper", "scissor"];
    return option[Math.floor(Math.random()* option.length)];
}

// function for play ground
function resultArea (player, robot) {
    if((player === "rock" && robot === "scissor") ||
       (player === "paper" && robot === "rock") ||
       (player === "scissor" && robot === "paper")) {
            return "win";
        } else if (player === robot) {
            return "tie";
        } else {
            return "lose";
        }
}

// score board
let playerScore = 0;
let robotScore = 0;
let roundsPlayed = 0;
const maxRound = 5;

function updatScore(gameResult) {
    if(gameResult === "win") {
        playerScore++;
    } else if (gameResult === "lose") {
        robotScore++;
    }
    playerScoreBoard.textContent = playerScore;
    robotScoreBoard.textContent = robotScore;
}

// play ground
function playGame(playerChoice) {
    if (playerScore < maxRound) {
        playerChoiceImage.src = choice[playerChoice];

        const robotChoice = robotPlay();
        robotChoiceImage.src = choice[robotChoice];

        const gameResult = resultArea(playerChoice, robotChoice);
        if (gameResult === "win") {
            result.textContent = gameResult;
            result.style.color = "#008000";
        } else if (gameResult === "lose") {
            result.textContent = gameResult;
            result.style.color = "#c30808";
        } else {
            result.textContent = gameResult;
            result.style.color = "#0e459d";
        }

        updatScore(gameResult);

        roundsPlayed++;
    }
    if (playerScore === maxRound) {
        displayFinalResult();
        rockBtn.style.display = "none";
        paperBtn.style.display = "none";
        scissorBtn.style.display = "none";
    } 
    else if (robotScore === maxRound) {
        displayFinalResult();
        rockBtn.style.display = "none";
        paperBtn.style.display = "none";
        scissorBtn.style.display = "none";
    }
}

// final result section
// final result section
function displayFinalResult() {
    setTimeout(() => {
        popup.style.display = "flex";
        popup.style.opacity = "0"; // Start with invisible
        setTimeout(() => {
            popup.style.opacity = "1"; // Fade in
        }, 50); // Slight delay to trigger the transition

        if(playerScore > robotScore) {
            finalResult.textContent = "You Win";
            finalResult.style.color = "#008000";
        } else if(playerScore < robotScore) {
            finalResult.textContent = "You Lose";
            finalResult.style.color = "#c30808";
        } else {
            finalResult.textContent = "Game Tie";
            finalResult.style.color = "#0e459d";
        }
        finalResult_playerScore.textContent = `Your Score: ${playerScore}`;
        finalResult_robotScore.textContent = `Robot Score: ${robotScore}`;
        
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorBtn.disabled = true;
    }, 900); // Wait 1 second before showing the popup
}


// button events
rockBtn.addEventListener("click", () => {
    playGame("rock");
    clickSound.currentTime = 0;
    clickSound.play();
});
paperBtn.addEventListener("click", () => {
    playGame("paper");
    clickSound.currentTime = 0;
    clickSound.play();
});
scissorBtn.addEventListener("click", () => {
    playGame("scissor");
    clickSound.currentTime = 0;
    clickSound.play();
});

// restart game
function replay() {
    closeBtn.onclick = () => {
        playerScore = 0;
        robotScore = 0;
        roundsPlayed = 0;
        playerScoreBoard.textContent = "0";
        robotScoreBoard.textContent = "0";
        result.textContent = "Result";
        result.style.color = "#d2d2d2";
        playerChoiceImage.src = "./public/user.png";
        robotChoiceImage.src = "./public/robot.png";
        finalResult.textContent = "";
        popup.style.display = "none";
        rockBtn.style.display = "";
        paperBtn.style.display = "";
        scissorBtn.style.display = "";
        rockBtn.disabled = false;
        paperBtn.disabled = false;
        scissorBtn.disabled = false;
    };
}
replay();