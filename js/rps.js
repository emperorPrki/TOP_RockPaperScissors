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


let playerSelection;
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

    playerSelection = prompt("Choose a weapon of choice", "");
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection !== weapons[0] && playerSelection !== weapons[1] && playerSelection !== weapons[2]){
        console.log("Choose a valid weapon!")
        playerPlay();
    } else {
        console.log("User picked: " + capitalize(playerSelection));
        return playerSelection;
    }
    
}

//Gets computers weapon of choice using randomized numbers 1 - 3;
function computerPlay() {

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    if (randomNumber === 1){
        computerSelection = weapons[0];
        console.log("Computer picked: " + capitalize(computerSelection));
        return computerSelection;
    } else if (randomNumber === 2){
        computerSelection = weapons[1];
        console.log("Computer picked: " + capitalize(computerSelection));
        return computerSelection;
    } else if (randomNumber === 3){
        computerSelection = weapons[2];
        console.log("Computer picked: " + capitalize(computerSelection));
        return computerSelection;
    } else {
        console.log("Something went wrong, try again!");
    }
}

//Evaluates winner according to conditions and adds points to winning player
function evaluateRoundWinner() {

    if (playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "rock") {
        console.log("Computer wins! " + capitalize(computerSelection) + " beats " + capitalize(playerSelection) + "!");
        return ++playerPoints;
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
               playerSelection === "paper" && computerSelection === "rock" ||
               playerSelection === "scissors" && computerSelection === "paper") {
        console.log("User wins! " + capitalize(playerSelection) + " beats " + capitalize(computerSelection) + "!");
        return ++computerPoints
    } else if (playerSelection === "rock" || computerSelection === "rock" ||
               playerSelection === "scissors" || computerSelection === "scissors" ||
               playerSelection === "paper" || computerSelection === "paper"){
        console.log("It's a tie!");
    }
}

//Plays one round and evaluates winner
function playRound() {

    playerPlay();
    computerPlay();
    evaluateRoundWinner();
}

//Resets all counters to 0, plays 5 rounds after which it announces the game winner
function game(){

    playerPoints = 0;
    computerPoints = 0;

    for (let i = 0; i < 5; i++){
        playRound();
        console.log("Computer points: " + computerPoints + "\n" + 
                    "Player points: " + playerPoints);
    }

    if(playerPoints > computerPoints){
        console.log("Player is the game winner!");
    } else if (playerPoints < computerPoints) {
        console.log("Computer is the game winner!");
    } else {
        console.log("It's a tie!");
    }
}