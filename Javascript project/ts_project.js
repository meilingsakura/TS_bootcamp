/*
let item1: number = 29.99;
let item2: number = 49.99;
let item3: number = 19.99;

let arrayNameItems: string[] = ["itemA","itemB","itemC"];
let arrayShoppingCart: number[] = [item1,item2,item3];
let shoppingCartCost: number = 0;
let taxRate: number = 7;
let totalTaxes: number = 0;
let taxPerItem: number = 0;

for (let i = 0; i < arrayShoppingCart.length; i++) {
    shoppingCartCost += (arrayShoppingCart[i]);
}
console.log("The cost of the shopping cart with no taxes is " + shoppingCartCost);

for (let i = 0; i < arrayShoppingCart.length; i++) {
    taxPerItem = (arrayShoppingCart[i] * taxRate/100);
    totalTaxes += taxPerItem;
    console.log("The cost of the tax of " + arrayNameItems[i] + " is " + taxPerItem.toFixed(2));

}

let shoppingCartCostAfterTax = shoppingCartCost + totalTaxes;
console.log("The total cost of the shopping cart is " + shoppingCartCostAfterTax.toFixed(2));



*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/*
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


*/
//Exercise 2: Temperature converter
/*

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





// exercise 1: grades procesing

let arrayStudentGrade: number[] = [];
let totalScore: number = 0;
let isExceptionalStudent: boolean = false;

for (let i = 0; i < 100; i++) {
    const promptSync = require('prompt-sync')({sigint: true});
    let userInputNumber: number = Number(promptSync('Enter a number: '));
        if (userInputNumber === -1){
            continue;
        }
        if (userInputNumber=== 1000){
            isExceptionalStudent = true; //prevents sending the average message at the end
            console.log('Exceptional student! Average is 100!');
            break;
                
        }
        
        arrayStudentGrade.push(userInputNumber);         //completes the array
           
}

for (let i = 0; i <arrayStudentGrade.length; i++) {
    totalScore+=arrayStudentGrade[i];                 //creates the total number of the members of the array
}
if (isExceptionalStudent=false){
let averageScore: number = totalScore/(arrayStudentGrade.length);
console.log('The average score of the students is: ' + averageScore);       //creates the average
}




//Exercise 2: Inventory Management System




const inventoryItemA = {
    id: 101,
    name: "A",
    price: 10,
}

const inventoryItemB = {
    id: 102,
    name: "B",
    price: 20,
}

const inventoryItemC = {
    id: 102,
    name: "C",
    price: 20,
}

const inventoryItemD = {
    id: 103,
    name: "D",
    price: 20,
}

const inventoryItems = [inventoryItemA, inventoryItemB, inventoryItemC];


inventoryItems.push (inventoryItemD);

let positionFound1: number = 0;
let positionFound2: number = 0;

for (let i = 0; i<inventoryItems.length; i++){
    if (inventoryItems[i].id===102){
        positionFound1 = i;
    }
}

inventoryItems.splice(positionFound1,1);

for (let i = 0; i<inventoryItems.length; i++){
    if (inventoryItems[i].id===103){
        positionFound2 = i;
    }
}

inventoryItems[positionFound2].price = 30;

for (let i = 0; i < inventoryItems.length; i++){
    for (let key in inventoryItems[i]){
        console.log("The key " + key + " has value " + inventoryItems[i][key]);
                  
    }
}

/*  FORMA ALTERNATIVA DE RESOLVER LA LLAMADA

for (let item of inventoryItems){
    for (let key in item){
        console.log(`The key ${key} has value ${item[key]}`);
    }
}

*/
//Exercise 3: product catalog
var product = {
    id: 1000,
    name: "AA",
    price: 1,
    tags: ["product", "catalog"],
};
var productCopy = __assign(__assign({}, product), { archivedTags: __spreadArray([], product.tags, true) });
productCopy.name = "Updated Product";
productCopy.price = 150;
productCopy.tags = ["updated", "discounted"];
console.log("Product:", product);
console.log("New Product:", productCopy);
//Exercise 1: Functions and geometry
function circleArea(radius) {
    return Math.PI * radius * radius;
}
var perimeterOfRectangle = function (height, lenght) {
    return 2 * (lenght + height);
};
var volumeCube = function (L) { return Math.pow(L, 3); };
console.log("Circle Area: " + circleArea(2));
console.log("Rectangle Perimeter: " + perimeterOfRectangle(2, 3));
console.log("Cube Volume: " + volumeCube(2));
// exercise 2: fibonacci
function fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return (fibonacci(n - 1) + fibonacci(n - 2));
}
console.log(fibonacci(10) + " this is the fibonacci function");
// exercise 3: array transformartion
var arrayLowerCase = ["papa", "batata", "pera"];
var arrayUpperCase = arrayLowerCase.map(function (str) { return str.charAt(0).toUpperCase() + str.slice(1); });
console.log(arrayUpperCase);
var arrayNumbers = [11, 22, 45, 50, 70, 85, 10];
var filteredArray = arrayNumbers.filter(function (n) { return (n >= 50 && n <= 75); });
console.log(filteredArray);
