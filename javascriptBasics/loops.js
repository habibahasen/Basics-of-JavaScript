//for loop
let number =  7;
console.log(`Multiplication Table for ${number}`);
for(let i =1; i <=7; i++){
    let result = number * i;
    console.log(`${number} X ${i} = ${result}`);
}
//while loop
let i = 1;
while(i <8){
    let result = number*i;
    console.log(`${number} X ${i}= ${result}`);
    i++;
}

//do while loop
const readlineSync = require('readline-sync');
let userInput;
let num;
do{
    userInput = readlineSync.question("Enter a positive number:");
    num = parseFloat(userInput);
}while (isNaN(num) || num <=0);
console.log(`you entered a valid positive number ${num}`);
