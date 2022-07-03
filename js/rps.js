/*Project - Rock Paper Scissors

PSEUDO CODE:
Prompt user to userPick a weapon                                ++
    - convert string to uppercase or lowercase for evaluation   ++
    - Three choices: Rock, Paper, Scissors                      ++
    - Accept only one of those three choices                    To be solved

Randomize opponents weapon choice                               ++
    - randomize a number between 1 and 3                        ++
    - convert randomized number to weapon choice                ++
    - convert weapon choice to a string                         ++
    - convert string to uppercase or lowercase for evaluation   To be solved

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
    - if userPick wins, add point to user                        To be solved
    - if computerPick wins, add point to computer                To be solved
    - if tie, no added points                                    ++

*/

//Prompt a user to pick a weapon

let userPick;
let computerPick;

function chooseWeaponUser(){

    userPick = prompt("Choose a weapon of choice", "");
    console.log("User picked: " + userPick);
    return userPick;
}

//Randomizes computer weapon using numbers 1 - 3;
function chooseWeaponComputer(){

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log(randomNumber);
    let weapons = ["rock", "paper", "scissors"];
    if (randomNumber === 1){
        computerPick = weapons[0];
        console.log("Computer picked: " + computerPick);
        return computerPick;
    } else if (randomNumber === 2){
        computerPick = weapons[1];
        console.log("Computer picked: " + computerPick);
        return computerPick;
    } else if (randomNumber === 3){
        computerPick = weapons[2];
        console.log("Computer picked: " + computerPick);
        return computerPick;
    } else {
        console.log("Something went wrong, try again!");
    }
}

//Evaluates winner according to conditions and adds points to winning player
function evaluateWinner(){
    
    chooseWeaponUser();
    chooseWeaponComputer();
    
    if (userPick === "rock" && computerPick === "paper" ||
        userPick === "paper" && computerPick === "scissors" ||
        userPick === "scissors" && computerPick === "rock") {
        console.log("Computer wins! " + computerPick + " beats " + userPick + "!");
        return ++userPoints;
    } else if (userPick === "rock" && computerPick === "scissors" ||
               userPick === "paper" && computerPick === "rock" ||
               userPick === "scissors" && computerPick === "paper") {
        console.log("User wins! " + userPick + " beats " + computerPick + "!");
        return ++computerPoints
    } else if (userPick === "rock" || computerPick === "rock" ||
               userPick === "scissors" || computerPick === "scissors" ||
               userPick === "paper" || computerPick === "paper"){
        console.log("It's a tie!");
    }
}