

/** Problem-1
 *Write a program that asks a user to input a number greater than 10. 
 Keep asking until the user provides a valid number.

User prompt-sync - we use it because the question is asking the user to use an input 
Use while loop
 *****/

/**
 * this bellow code is done the correct but normal way of doing it with "Use while loop",
 but without using "User prompt-sync" 
 */

//  let input=20;

// while(true){
    
    
//     if (input>10){
//         console.log('the input is correct')
//         break
//     } else {
//         console.log("try new number again")
//         break
//     }   
     
    
// }


/**
 * But in here this line answers like the question requested using both 
"Use while loop" and "User prompt-sync" :

 N.B., promtpt goes to the user and tells him what to do,
 so instead of using let input=5, which is considered as "Direct"; we use "prompt one" below,
 */

 const prompt= require(`prompt-sync`)(); // require = importing into this prompt
 let input = prompt("Enter a number greater than 10:");

while(input<=10){
    // input=prompt("Invalid input. Please enter a number greater than 10:")
    input = prompt(" Invalid input.Please,Enter a number greater than 10:");
   
}

console.log(" You entered a correct number" + input)