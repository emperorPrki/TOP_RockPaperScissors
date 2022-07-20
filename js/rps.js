

/*Project - Rock Paper Scissors

PSEUDO CODE:
Prompt user to userPick a weapon                                ++
    - make choice case insensitive                              ++
    - Three choices: Rock, Paper, Scissors                      ++
    - Accept only one of those three choices                    ++

Randomize opponents weapon choice                               ++
    - randomize a number between 1 and 3                        ++
    - convert randomized number to weapon choice                ++
    - convert weapon choice to a string                         ++
    - make choice case insensitive                              ++

Parse choices to evaluation                                     ++

Evaluate the choices                                            ++
    IF (userPick === Rock && computerPick === Rock ||
       userPick === Paper && computerPick === Paper ||
       userPick === Scissors && computerPick === Scissors) {
        console.log("It's a tie")
    } ELSE IF (userPick === Rock && computerPick === Scissors ||
        userPick === Scissors && computerPick === Paper ||
        userPick === Paper && computerPick === Rock){
            console.log("User wins!")
    } ELSE IF (userPick === Rock && computerPick === Paper ||
               userPick === Scissors && computerPick === Rock ||
               userPick === Paper && computerPick === Scissors){
            console.log("Computer wins!")
    } ELSE {
        console.log("Something went wrong, please try again!")
    }
    
Add point to score                                               ++
    - if userPick wins, add point to user                        ++
    - if computerPick wins, add point to computer                ++
    - if tie, no added points                                    ++

Add game function that combines all previous functions to form a game  ++
    - Have 5 rounds                                              ++
    - At start of each game reset counters to 0                  ++
    - At the end of round 5 announce game winners                ++
*/


let playerSelection = "";
let computerSelection;
let playerPoints = 0;
let computerPoints = 0;
let weapons = ["rock", "paper", "scissors"];

//Capitalizes a string
function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

//Gets weapon of choice input from player.

function playerPlay() {

    playerSelection = playerSelection.toLowerCase();
    if (playerSelection !== weapons[0] && playerSelection !== weapons[1] && playerSelection !== weapons[2]){
        displayChosenWeapon.textContent = ("Choose a valid weapon!")
        playerPlay();
    } else {
        displayChosenWeapon.textContent = ("User picked: " + capitalize(playerSelection));
        return playerSelection;
    }
}

//Gets computers weapon of choice using randomized numbers 1 - 3;
function computerPlay() {

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    if (randomNumber === 1){
        computerSelection = weapons[0];
        displayChosenWeaponCPU.textContent = ("CPU picked: " + capitalize(computerSelection));
        return computerSelection;
    } else if (randomNumber === 2){
        computerSelection = weapons[1];
        displayChosenWeaponCPU.textContent = ("Computer picked: " + capitalize(computerSelection));
        return computerSelection;
    } else if (randomNumber === 3){
        computerSelection = weapons[2];
        displayChosenWeaponCPU.textContent = ("Computer picked: " + capitalize(computerSelection));
        return computerSelection;
    } else {
        displayChosenWeaponCPU.textContent = ("Something went wrong, try again!");
    }
}

//Evaluates winner according to conditions and adds points to winning player
function evaluateRoundWinner() {

    if (playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "rock") {
        roundWin.textContent = "Computer wins! " + capitalize(computerSelection) + " beats " + capitalize(playerSelection) + "!";
        ++computerPoints
        runningScoreCPU.textContent = computerPoints;
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
               playerSelection === "paper" && computerSelection === "rock" ||
               playerSelection === "scissors" && computerSelection === "paper") {
        roundWin.textContent = "User wins! " + capitalize(playerSelection) + " beats " + capitalize(computerSelection) + "!";
        ++playerPoints
        runningScorePlayer.textContent = playerPoints;
    } else if (playerSelection === "rock" || computerSelection === "rock" ||
               playerSelection === "scissors" || computerSelection === "scissors" ||
               playerSelection === "paper" || computerSelection === "paper"){
        roundWin.textContent = "It's a tie!";
    }
}

//Plays one round and evaluates winner
function playRound() {

    playerPlay();
    computerPlay();
    evaluateRoundWinner();

    if(playerPoints === 5){
        divGameWinner.textContent = `Player wins the game with ${playerPoints} wins!`;
        disableButtons();
        newGameButton();
    } else if (computerPoints === 5) {
        divGameWinner.textContent = `Computer wins the game with ${computerPoints} wins!`;
        disableButtons();
        newGameButton();
    }
}

//Resets all counters to 0, plays 5 rounds after which it announces the game winner
/*
function game(){


    playerPoints = 0;
    computerPoints = 0;

   for (let i = 0; i < 5; i++){
        playRound();
        console.log("Computer points: " + computerPoints + "\n" + 
                    "Player points: " + playerPoints);
    }

    if(playerPoints > computerPoints){
        divGameWinner.textContent = `Player wins the game with ${playerPoints} wins!`;
    } else if (playerPoints < computerPoints) {
        divGameWinner.textContent = `Computer wins the game with ${computerPoints} wins!`;
    } else {
        divGameWinner.textContent = `It's a tie, no winners!`;
    }
}
*/


//After clicking a weapon button, assigns weapon to playerSelection and displays it in a div
const wepButton = document.querySelectorAll("#weapons button");
wepButton.forEach((button) => {
    button.addEventListener("click", () => {
        playerSelection = button.id
        playRound();
    }      
)});

//Add playerWeapon div to the HTML, displays weapon the player chose
const showPlayerWeapon = document.querySelector("#weapons")
    const playerWeapon = document.createElement("div");
    showPlayerWeapon.appendChild(playerWeapon);
    playerWeapon.setAttribute("id", "playerWeapon");

    const displayChosenWeapon = document.querySelector("#playerWeapon")

const showGameWinner = document.querySelector("#results");
    const divGameWinner = document.createElement("div");
    showGameWinner.appendChild(divGameWinner);

    //Add computerWeapon div to the HTML, displays weapon the CPU chose
const showComputerWeapon = document.querySelector("#weapons")
const computerWeapon = document.createElement("div");
showComputerWeapon.appendChild(computerWeapon);
computerWeapon.setAttribute("id", "computerWeapon");

const displayChosenWeaponCPU = document.querySelector("#computerWeapon")


//Disable buttons
    function disableButtons(){
       const disableButton = document.querySelectorAll("#weapons button");
        disableButton.forEach((button) => {
            button.disabled = true;
        });
    };
    
//Enable buttons
    function enableButtons(){
        const enableButton = document.querySelectorAll("#weapons button");
        enableButton.forEach((button) => {
            button.disabled = false;
        })
    }

//New game button
    function newGameButton(){
        const newGame = document.querySelector("#weapons");
        const newGameButton = document.createElement("button");
        newGameButton.textContent = "New game!";
        newGameButton.setAttribute("id", "newGameButton");
        newGame.appendChild(newGameButton);

        const restartGame = document.querySelector("#weapons #newGameButton");
        restartGame.addEventListener("click", () => {
            playerPoints = 0;
            computerPoints = 0;
            runningScorePlayer.textContent = playerPoints;
            runningScoreCPU.textContent = computerPoints;
            divGameWinner.textContent = "";
            displayChosenWeapon.textContent = "";
            enableButtons();
            newGame.removeChild(newGameButton);
        });
    }

//Show running score
    const runningScore = document.querySelector("#results")

    const runningScorePlayer = document.createElement("div");
    const runningScoreCPU = document.createElement("div");

    runningScorePlayer.setAttribute("id", "playerScore");
    runningScorePlayer.textContent = "0";
    runningScoreCPU.setAttribute("id", "cpuScore");
    runningScoreCPU.textContent = "0";

    runningScore.appendChild(runningScorePlayer);
    runningScore.appendChild(runningScoreCPU);

    const displayRoundWin = document.querySelector("#results");
     const roundWin = document.createElement("p");
     roundWin.setAttribute("id", "roundWin");
     roundWin.textContent = "";
     displayRoundWin.appendChild(roundWin);
//TO ADD RUNNING SCORE, STYLIZE CSS, POLISH