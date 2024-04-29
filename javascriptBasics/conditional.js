//if statment
let oldEnough = true;
if (oldEnough){
    console.log("You are old enough to be left alone!");
}

//if else statement 1
let num = 24;
let result = ""
if (num % 2 ==0){
    result = "even number";
}else{
    result = "Odd number";
}
console.log(result);

console.log(num %2 ==0 ? "even number" : "odd number")   //the ternary opperator

//if-else statement 2
let BMI = 23;
if (BMI < 18.5){
    result = "Underweight";
}else if ( BMI >= 18.5 && BMI <= 24.9){
    result = "Healthy weight";
}else if( BMI >= 25 && BMI <= 29.9){
    result = "Overweight";
}else{
    result = "Obesity";
}
console.log(result);


// switch statement 1
const pet = "dog";
switch(pet){
    case "lizard":
        console.log("I own a lizard");
        break;
    case "dog":
        console.log("I own a dog");
        break;
    case "cat":
        console.log("I own a cat");
        break;
    case "parrot":
        console.log("I own a parrot");
        break; 
    default:
        console.log("I don't own a pet");
        break;
}

//switch statement 2
switch(true){
    case BMI < 18.25:
        result = "underweight";
        break;
    case BMI >= 18.5 && BMI <= 24.9:
        result = "Healthy weight";
        break;
    case BMI >= 25 && BMI <= 29.9:
        result = "Overweight";
        break;
    default:
        result = "obesity";
}
console.log(result);
 