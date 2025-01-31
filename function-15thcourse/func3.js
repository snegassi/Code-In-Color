


// 1. Function to Add Two Numbers
// Create a function that takes two numbers as parameters and returns their sum.

function add(a,b){
  return a+b
}
//console.log(add(5,10))

// 2. Function to Find the Largest Number
// Write a function that takes two numbers and returns the larger number.

function largestNum(x,y){
    let a=Math.max(x,y);
    return a
}
 //console.log(largestNum(4,8))

// 3. Function to Check Even or Odd
// Create a function that checks whether a number is even or odd.

 function checker(c){
    if (c%2===0) {
        return "Even"
    }else{return "Odd"}
 }
 //console.log(checker(7))

// 4. Function to Square a Number
// Write a function that takes a number and returns its square.

function squareNum(f){
     return f *2 ;
}
//console.log(squareNum(4));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5. Function to Calculate Area of a Rectangle
// Create a function that takes the length and width of a rectangle and returns its area.

function areaRec(lenght,width){
    return lenght*width
}
//console.log(areaRec(2,7));

// 6. Function to Reverse a String
// Write a function that takes a string and returns the reversed version of the string.??
function reverse(str){
    //return parseInt(str)
     let x= parseInt(str)
    return x
    //return str.split("").reverse().join("")
}
//console.log(reverse("345"))
//console.log(reverse("bye dog"));

// 7. Function to Find the Factorial of a Number  ???????
// Create a function that finds the factorial of a given number.

// function fuctorial(a){
//     n!=n-(n-1)*
// }

// 8. Function to Return the First Letter of Each Word
// Write a function that takes a sentence and returns the first letter of each word.

function returnFirstword(b){
    // words=b.split("")
    // return words[0]

// ".split(' ') "Split the string into an array of words and ".map(word => word[0])" Get the first letter of each word
    return b.split(' ') .map(word => word[0]) 
    
}
//console.log(returnFirstword("word of the usa"))

// 9. Function to Find the Smallest Number in an Array
// Create a function that takes an array of numbers and returns the smallest number.

// 10. Function to Count Vowels in a String
// Write a function that counts the number of vowels in a string.
