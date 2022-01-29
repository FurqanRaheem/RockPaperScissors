// DOM Cache
var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const userSubScript = "user".fontsize(5).sup();
const compSubScript = "comp".fontsize(5).sup();

function main(){
    result_p.innerHTML = "Let's get started!";
    rock_div.addEventListener("click", function(){
        game("rock");
    })
    paper_div.addEventListener("click", function(){
        game("paper");
    })
    scissors_div.addEventListener("click", function(){
        game("scissors");
    })
}
function getCompChoice(){
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * 3)];
}
function win(userChoice, compChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${userChoice} ${userSubScript} beats ${compChoice} ${compSubScript}. You Win!`;  
}
function lose(userChoice, compChoice){
    compScore++;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${userChoice} ${userSubScript} loses ${compChoice} ${compSubScript}. You lose!`;
}
function draw(userChoice, compChoice){
    result_p.innerHTML = `${userChoice} ${userSubScript} is equal to ${compChoice} ${compSubScript}. It's a draw!`;
}
function game(userChoice){
    const compChoice = getCompChoice();
    switch (userChoice + compChoice){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, compChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, compChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, compChoice);
            break;
    }
}
main();