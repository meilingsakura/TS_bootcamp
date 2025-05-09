//Exercise 2: Temperature converter

let userInputMenu: string = "null";

while (userInputMenu!=="3"){
console.log('Menu');
console.log('1. Convert Celsius to Kelvin');
console.log('2. Convert Kelvin to Celsius');
console.log('3. Exit program');


const promptSync = require('prompt-sync')({sigint: true});
    userInputMenu = (promptSync('Select the menu:'));
    
    while (userInputMenu !== "1" && userInputMenu !=="2" && userInputMenu !=="3"){    // validates that user is valid option
        console.log("That's Not a valid Number!, try again !");
        userInputMenu = (promptSync('Select the menu:'));
    }  

if (userInputMenu ==="3"){
    break;
}

let userInputValue: number = Number(promptSync('Enter a number: '));
    while (isNaN(userInputValue)) {    // validates that user is entering a number
        console.log("That's Not a Number!");
        userInputValue = Number(promptSync('Enter a number!: '));
    }  

const constkelvin: number = -273.15
let celsiusToKelvin: number = userInputValue - constkelvin
let kelvinToCelsius: number = userInputValue + constkelvin

switch (userInputMenu) {
    case "1":
        while (userInputValue < constkelvin){
            console.log('The minimum value for celsius should be -273.15, try again!'); //validates if user enter an invalid number
            userInputValue = Number(promptSync('Enter a number!:'));
        }
        console.log('the entered temperature on Kelvin is ' + celsiusToKelvin);
        break;

    case "2":
        console.log('the entered temperature on Celsius is ' + kelvinToCelsius);
        break;
}
   
}

