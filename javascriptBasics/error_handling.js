// throws custom error 1
function calculateArea(width, length){
    if(typeof width !== 'number' || typeof length !== 'number'){
        throw new Error("Both arguments must be numbers");
    }if( width <= 0 || length <=0){
        throw new Error("Argumemts can not be less than zero!");
    }
    
    return width * length;
}
try{
    let width = 0;
    let length = 6;
    let area = calculateArea(width, length);
    console.log(`The area of the rectangle with width ${width} and length ${length} is: ` , area)
}catch(e){
    console.error("Error occured:", e.message);

}
// throws custom error 2
function findMax(array){
    if (!Array.isArray(array) || array.length ===0){
        throw new Error("The input must be a non-empty array of numbers.");
    }
    return Math.max(...array);
}
try{
    let array = [2,5,9,15];
    console.log(findMax(array));
}catch(e){
    console.error("Error:", e.message)
}

//using built in error objects 1
function getElement(arr, index){
    if (!Array.isArray(arr) || arr.length ===0){
        throw new TypeError("The first input must be a non-empty array");
    }if (typeof index != 'number'){
        throw new TypeError("the second input must be a number!");
    }if (index >= arr.length){
        throw new RangeError("Index out of bound");
    }
    return arr[index];
}try{
    let arr = ['Neima', 'Sadiya', 'Muklisa', 'Meydiya'];
    console.log(getElement(arr, 4));
}catch(e){
    console.error("error occured:" ,e.message);
}

//using built in error objects 2
function parseJson(jsonString){
    return JSON.parse(jsonString);
}
try{
        let jsonString =' {"name":"muna", "sister":"selwa"';
        let parsedObj = parseJson(jsonString);
        console.log("parsed object:", parsedObj);
        
        
        
    }catch(e){
        console.error("error occured:", e.message)
    }
