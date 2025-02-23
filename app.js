
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const option = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    return option[randomIndex];
}
const drawGame = () => {
    msg.innerText = "Game draw!, Play again."
    msg.style.backgroundColor = "#1e0034";

}
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        msg.innerText = `You won!, Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScorePara.innerText = userScore;
    } else {
        compScore++;
        msg.innerText = `You lose!, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScorePara.innerText = compScore;
    }
}
const playGame = (userChoice) => {
    //generateComputerChoice
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        //drawGame
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        // console.log(`${userChoice} was clicked!`);
        playGame(userChoice);

    })
})