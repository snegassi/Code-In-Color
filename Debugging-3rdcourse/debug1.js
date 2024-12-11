/**
 * If the user is a member, or the cartValue is $100 or more, they get a discount.
 *  Otherwise, they don’t get a discount. Print to console whether they get a discount or not.
 */

// let x= 10
// let y= 5
// let sum= x+y

// console.log(sum)
// console.log("this is a break point")

/**
 * Example with Debugging 1
 
1) If a number is divisible by 2, it is even; otherwise it is odd. For any number n, 
write a block of code that prints to console whether a number is even or odd. 
 */


// let num= 4

// if (num %2===0){
//     console.log("Even")
// }else {
//     console.log("Odd")
// }

/**
 2)If the user is a member, or the cartValue is $100 or more, they get a discount. 
 Otherwise, they don’t get a discount. Print to console whether they get a discount or not.

 */

//  let member= true
//  let cartValue=50

//  if (member && (cartValue>=100)){
//     console.log("Get a discount")
//  }else{

//     console.log("Don't get a discount")
//  }
 

 /**
  * 3) If the username and password are provided, print “Login successful.” If either is missing, 
 print “Login failed”.
  */

// let username="sam"
// let passwordss="zxcv"

// if (username && passwordss){
//     console.log("Login successful.")
// }else {
//     console.log("Login failed")
// }



/**
 * 4) Scenario: A movie theater charges ticket prices based on the following rules
The base price is $20
If the person is under 18 or above 65, they get a discount ($5)
If the person has a membership card, they get an additional discount ($3) regardless of age
Otherwise, they pay the full price
Calculate and display the final ticket price based on these rules
 */


// let ticketPrice=20
// let age=3
// let membershipCard=false

// if ((age<=18)||(age>=65)){
//     console.log ("You get $5 dollar discount,so you'r change is ", ticketPrice-15)
// }else if(membershipCard){
//     console.log ("You get $5 dollar + $3 dollar= $7dollar discount,so you'r change is ", ticketPrice-13)
// }else{
//     console.log ("You pay the full prise $20 dollars,so you'r change is ", ticketPrice-20 )
// }