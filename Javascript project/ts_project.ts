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

if (isExceptionalStudent=false){
    for (let i = 0; i <arrayStudentGrade.length; i++) {
        totalScore+=arrayStudentGrade[i];                 //creates the total number of the members of the array
    } 

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

const product = {
    id: 1000,
    name: "AA", 
    price: 1,
    tags: ["product","catalog"],
};

let productCopy = {...product, archivedTags: [...product.tags]}

productCopy.name = "Updated Product";
productCopy.price = 150;
productCopy.tags = ["updated", "discounted"];


console.log("Product:", product);
console.log("New Product:", productCopy);


//Exercise 1: Functions and geometry



function circleArea(radius: number): number {
    return Math.PI * radius * radius ;
}



const perimeterOfRectangle = function(height: number, lenght: number): number{
    return 2 * (lenght + height);
 
}

const volumeCube = (L: number): number => L**3;

console.log("Circle Area: " + circleArea(2));
console.log("Rectangle Perimeter: " + perimeterOfRectangle(2,3));
console.log("Cube Volume: " + volumeCube(2));


// exercise 2: fibonacci

function fibonacci (n: number): number {
    if (n ===  0) {
        return 0 
    }

    if (n===1){
        return 1
    }
    return (fibonacci (n-1) + fibonacci(n-2));
}

console.log (fibonacci(10) + " this is the fibonacci function")

// exercise 3: array transformartion

const arrayLowerCase = ["papa","batata","pera"];

const arrayUpperCase = arrayLowerCase.map(str => str.charAt(0).toUpperCase() + str.slice(1));
console.log(arrayUpperCase);

const arrayNumbers =[11,22,45,50,70,85,10]

const filteredArray = arrayNumbers.filter (n=>(n>=50 && n<=75));
console.log(filteredArray);



class Book {
    title: string;
    author: string;
    yearPublished: number;
    classic: boolean = false;
    
    constructor (object_title:string, object_author:string, object_year:number){
        this.title = object_title;
        this.author = object_author;
        this.yearPublished = object_year;
                
        if (object_year<1975){
            this.classic = true;
        }
            
    }

    print(): void {  
        console.log (this.title + " by " + this.author + "published in " + this.yearPublished);

    }
}


const book1 = new Book ('Harry Potter', 'JK Rowling', 1994);
console.log(book1.print());














//

class Agenda {
    private nombres: string[] = [];

    agregarNombre(nombre: string): void {
        if (!this.nombres.includes(nombre)) {
            this.nombres.push(nombre);
            console.log(`${nombre} ha sido agregado.`);
        } else {
            console.log(`${nombre} ya está en la agenda.`);
        }
    }

    mostrarNombres(): void {
        console.log("Lista de nombres en la agenda:");
        console.log(this.nombres.join(", "));
    }
