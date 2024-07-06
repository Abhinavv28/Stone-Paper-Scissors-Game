let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#userscore");
const compscorepara = document.querySelector("#compscore");


//Generate computer choice
const genCompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomID = Math.floor(Math.random() * 3);
    return options[randomID];
}


//Draw Game condition
const drawgame = () => {
    console.log("Game was Draw");
    msg.innerText = "Game was Draw, Play Again";
    msg.style.backgroundColor = "rgb(2, 2, 37)";
}

//Winner Decleration
const showWinner = (userwin, userChoice, compChoice) => {
    if(userwin ) {
        userscore++;
        userscorepara.innerText = userscore;
        console.log("You Win");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        console.log("You Lose");
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "rgb(146, 7, 7)";
    }
}


//Game Logic
const playgame = (userChoice) => {
    console.log("User Choice =", userChoice);
    const compChoice = genCompchoice();
    console.log("Comp Choice = ", compChoice);

    if(userChoice === compChoice){
        drawgame();
    } else {
        let userwin = true;
        if(userChoice === "rock") {
            userwin = compChoice === "paper" ? false : true;
        } else if ( userChoice === "paper") {
            userwin = compChoice === "scissors" ? false : true;
        } else {
            userwin = compChoice === "rock" ? false : true;
        }

        showWinner(userwin, userChoice, compChoice);
    }
}

//Choice Selection
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    })
});