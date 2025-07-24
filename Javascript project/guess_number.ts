//Exercise 1: Guessing game

const randomNumber: number = Math.floor(Math.random()*100);
console.log(randomNumber);
let numberAttemps: number = 0;

while (numberAttemps < 3){
    // Code to be executed
    const promptSync = require('prompt-sync')({sigint: true});
    let userInput: number = Number(promptSync('Guess a number!:'));

    while (isNaN(userInput)) {    // validates that user is entering a number
        console.log("That's Not a Number!, try again !");
        userInput = Number(promptSync('Guess a number!:'));
    }  

    let numberGuessed: number = userInput;
          
    if (numberGuessed === randomNumber){    //what happens if user guesses the number
        console.log('Congratulations! You found the secret!');
        break;
    } 

    else {

        numberAttemps++ //validates the amount of attemps 

        if (numberAttemps === 3) {
            break;
        }
        
        if (numberGuessed > randomNumber){  //what happens if user doesn't guess the number
                console.log('The secret number is lower than ' + numberGuessed + ' try again!');
            }

        if (numberGuessed < randomNumber){
                console.log('The secret number is higher than ' + numberGuessed + ' try again!');
            }
        
        
    }  

}   

if (numberAttemps === 3){
    console.log ('That’s sad, the secret number was ' + randomNumber);
}


