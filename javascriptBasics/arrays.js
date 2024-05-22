// create array
const fruits = [
    'apple', 
    'banana', 
    'orange',
    {
    pseudoFruits : function(){
        console.log("Rosehip is one example")
    }
}
    
];
const vegs = new Array(10);// array with length 10

// Access elements of array
console.log(fruits.length)
console.log(fruits[2]);

//iterating over array
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
};

fruits.forEach(fruit =>{
    console.log(fruit);
});

//Manipulate array

//add element
fruits.push('grape');
fruits.unshift('cherry');
fruits[2] = 'avocado'
console.log(fruits)

//remove element
fruits.pop();
fruits.shift();
console.log(fruits);

//slicing
let slicedFruit = fruits.slice(0,4);
let splicedFruit = fruits.splice(0,2,'pearl', 'kiwi');
console.log(fruits)
console.log(slicedFruit)
fruits[3].pseudoFruits();