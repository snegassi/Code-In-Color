// Nested loops are loops inside another loop, allowing for more complex iterations.
// Example: Multiplication Table

// // Nested loop example: Multiplication table
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         console.log(i + " * " + j + " = " + (i * j));
//     }
//     console.log("---"); // Separator for each row
// }


// Definition: Combining loops with nested conditional statements allows for complex control flow based on multiple criteria.
// Example: Filtering and Displaying Even Numbers

// // Loop with nested condition: Filtering and displaying even numbers
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) { // Check if i is even
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd");
//     }
// }

// 1) Scenario: Print all multiples of 3 between 1 and 30
// Hint: you can use (i%3 == 0) to check if a number is divisible by 3

for(let i=1;i<=30;i++){
     if(i%3==0){
      
       //console.log(`${i} is odd`)      // this works back tick helps with printing variables and strings together making it efficent unlike the next line
       console.log([i] + " is odd")     // this works
     }  
}


// 2) Scenario: Write a program to calculate and display to console the sum of the first n natural 
// numbers, where n is given
// Hint: A natural number is a whole positive number (for e.g., 1, 2, 8, 10)
// Example Input: n = 5
// Example Output: 15 (1 + 2 + 3 + 4 + 5)



// const n= 5  // since this input is fixed or stable we use const
// let sum=0

// for(let i=n;i>=1;i--){  // this part is only focused for the  looping
//     sum+=i              // this part is only focused on the equation of the question, so its seperate

//     //console.log ("sum of "+[i]+" is " + sum)
// }
//     console.log (sum)  // using the conol on the outsid elike this gives us the end output only but if
//                       // inside it will give us the whole process on how it came about to the end out put    



// 3) Scenario: Calculate the factorial of a given number n, and print it to console.
// Hint: A factorial n! = n * (n - 1) * (n - 2) * … * 1
// Example Input: n = 4
// Example Output: 24 (4 * 3 * 2 * 1)

// let n =4

// for(let i=n; i>0;i--){
//   //n!
//   factorial=n * (n - 1) * (n - 2) * (n-3)*1

//   console.log(factorial)
// }

