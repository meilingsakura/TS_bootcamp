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
