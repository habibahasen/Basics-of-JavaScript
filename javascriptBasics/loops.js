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

const { keyIn } = require("readline-sync");

//do while loop
const readlineSync = require('readline-sync');
let userInput;
let num;
do{
    userInput = readlineSync.question("Enter a positive number:");
    num = parseFloat(userInput);
}while (isNaN(num) || num <=0);
console.log(`you entered a valid positive number ${num}`);

//iterate over array

const scores = [22,54,76,92,43,33];
let j = 0;
//while
while(j < scores.length){
    console.log(scores[j]);
    j++;
}
//do ...while
do{
    console.log(scores[j])
    j++;
}while(j< scores.length);

//
let k = 6;
do {
    console.log(scores[k]);
    k++;
}while(k < scores.length)

//for 1
for(let m = 0; m < scores.length; m++){
    console.log(scores[m]);
}

// for ...in
for (i in scores){
    console.log(scores[i]);
}

