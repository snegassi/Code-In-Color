

// Calculate the total cost of tile needed in an area ??

//helper function to calculate Area

function calculateArea (length,width){
    return length*width
}

// helper function to calculate tile cost

function calculateTileCost(area,tileCost){
    return area * tileCost
}


// #### Here In the Main function to calculate the total cost, we can not put/pass the any of helper functions inside the parameter of main function/calculateTheTotalCost(here).
//#### That is because any fuction can be called anyware even within a functions but we need the helper function's parameters to be the parameters of our main function parameters.
function calculateTheTotalCost(length,width,tilePricePerSqft){
    let area= calculateArea(length.width);
    let totalCost= calculateTileCost(area,tileCost)
    return totalCost;
}

//  Example usage
// let bathroomLength=10;
// let bathroomWidth=8;
// let tilePricePerSqft=5;

// let totalTileCost=calculateTheTotalCost(bathroomLength,bathroomWidth,tilePricePerSqft);
// console.log(`Total cost to replace bathroom tile:$${totalTileCost}`);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Array Functions
// Example: map(), filter()

let numbers = [1,2,3,4,5];

// Using map to create a new array with each number doubled
// so here the variable num declares the numbers from the above into map(inside function as single number) everytime it is going over it.
// the reason why we are not declaring the num is because variables inside parameter are not declared but are understood as bein automatically being declared if put inside the parameter.
// the arrow function that is being used inside the parameter, is also the only function that can be used inside a parameter like in this below case 
let doubled = numbers.map(num => num * 2);
// console. log(doubled);
// console.log(numbers)

// Using filter to create a new array with numbers greater than 2

let filtered = numbers.filter(num=> num > 2);
// console.log(filtered)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// String Functions
// Example: split(), toUpperCase(), and replace()
 let str = "hello, world!"

// Using split to create an array of words, split seperates the string based on the spaces between the words in str. 
// And do 2 spaces between the double quotes too. And see the changes.
let word = str.split(" ")// result= [ 'hello,', 'world!' ]
let chr = str.split("o") // result = [ 'hell', ', w', 'rld!' ], splits the word using the o word as the middle line
// console.log (word)
// console.log (chr)

// Using toUpperCase to convert the string to uppercase
  let upper = str.toUpperCase()
  //console.log(upper) // result = HELLO, WORLD!

// Using replace to replace "world" with "JavaScript"
let rep = str.replace("world", "javaScript")
  console.log(rep) // result = hello, javaScript!

 ///////////////// //////////////////////////////////////////////////////////////////////////////////////////////////////////


 // Math Functions
// Example: Math.max(), Math.min(), and Math. random()
let a = 5;
let b = 10;
let c = -3;

// Using Math.max to find the maximum value
let maxVal = Math.max(a,b,c);
// console. log(maxVal);

// // Using Math.min to find the minimum value
// let minVal = Math.min(a,b,c);
// console. log(minVal);

// // Using Math.random to generate a random number between 0 and 1
// let randomVal = Math. random();
// console. log(randomVal)
// //how about if we want a random whole number
// console. log(randomVal*100) // result= 61.44276966121609,Still decimal, so
// console. log(Math.floor(randomVal*100)) // would get us the lowest because of floor, lowest whole number
// console. log(Math.ceil(randomVal*100))  // would get us the highest because of ceil, highest whole number

///////////////////////////////////////////////////////////////////////////////////////////////////

// Built-in Functions
// Example: parseInt(), parseFloat(), and isNaN()
let intStr = "123";
let floatStr = "123.45"
let nanStr = "abc";

// Using parseInt to convert a string to an integer
console. log(intStr); 
console. log(parseInt(intStr));// changed the number string to just a number 

// Using parseFloat to convert a string to a floating-point number
console. log(parseFloat(floatStr));// changed the number string to just a number 

//Using isNaN to check if a value is NaN (Not-a-Number)
console. log(isNaN(nanStr)); // result gives a boolean answer true or false,is nanStr string a not a number ?? True
console. log(isNaN(floatStr)); // result gives a boolean answer true or false,is floatStr string a not a number ?? True