// Nested Conditionals
// "If the account balance is greater than $0, display 'Positive'; if it is $0, display 'Neutral'; otherwise, display 'Negative'.

// let accBalance= 30

// if (accBalance>0){
//        console.log("positive")
// }else if(accBalance=0){
//     console.log("Neutral")
// }else{
//     console.log("Negative")
// }

// logical AND
// "If the user is over 18 and has a valid ID, allow entry."

// let userAge = -6
// let validId= true

// if(userAge>18 && validId){
//     console.log("allow entry")
// }else{
//     console.log("Do not allow entry")
// }






// Logical OR
// "If it is a weekend or a public holiday, display 'Closed'."

// let weekend= True //false
// let pubHoliday=false

// if (weekend || pubHoliday){
//  console.log("closed")
// }else{
//     console.log("open")
// }






// Complex Boolean Logic
// "If the user is an admin or has a premium account and is active, allow access to premium content."

// let userAdmin= true
// let preAcc= true
// let active= false // true, being active or not matters the most as it can affect the person to have access or not

// if((userAdmin || preAcc) && (active)){

//     console.log(" Yes,Access to premium content")
// }else{
//     console.log(" No,Access to premium content")
// }





//Chained Conditions
//"If the grade is 90 or above, assign 'A'; if it is 80 or above, assign 'B'; if it is 70 or above, assign 'C'; otherwise, assign 'F'."

// let grade= 90

// if(grade>= 90){
//     console.log("A")
// }else if(grade>=80 && grade <= 89) {  //???????????? why not work with || or
//     console.log("B")
// }else if(grade>=70 && grade <= 79){
//     console.log("C")
// }else{
//     console.log("F")
// }





// Equality Check
// "If the input string is 'yes' (case-insensitive), display 'Confirmed'."

// let input="yes"
// let equal="yes"

// if (input==equal){       // so == can actually check even the spelling so misspelled or alphabet before "y" won't even pass or checks it well
//      console.log("Confirmed")
// }else{
//     console.log("Not Confirmed")
// }




//Handling Multiple Conditions
//"If a product is in stock and the user has enough balance, allow the purchase; if it's out of stock, display 'Out of stock';
 //otherwise, display 'Insufficient balance'.

//  let productInstock= true
//  let balance=6
//  let purchase=60

//  if((productInstock)&&( balance >=purchase)){
//     console.log("Allow the purchase")
//  }else{
//     console.log("Insufficient balance")
//  }



//Comparisons and Math
//"If the square of a number is greater than 100, display 'Large'; otherwise, display 'Small'."

// let x=300
// let y = x*2;

// if (y>100){
//    console.log ("Large")
// }else{
//     console.log("Small")
// }



//Compound Condition with Nested Logic
//"If the user is a student and their age is between 13 and 19, display 'Teen Student'; otherwise, display 'Other'."

// let student=true
// let age=30

// if((student)&&((age>=13)&&(age<=19))){
//     console.log("Teen Student")
// }else{
//     console.log("Other")
// }


//Condition with Multiple Variables
//"If a car's speed is greater than 100 km/h, and the driver is wearing a seatbelt, display 'Safe Fast'; if the speed is greater than 
//100 km/h but the driver is not wearing a seatbelt, display 'Unsafe Fast'; otherwise, display 'Normal'."

// let carSpeed = 20     // how do i write km/h
// let seatbelt=false

// if((carSpeed>100) && (seatbelt)){
//     console.log("Safe Fast")
// }else if((carSpeed>100) && (!seatbelt)){
//     console.log("Unsafe Fast")
// }else{
//     console.log("Normal")
// }



//Problem Statement:
// You want to assign letter grades based on a student's percentage score. The grading scale is:
// "A" for scores 90 and above
// "B" for scores 80-89
// "C" for scores 70-79
// "D" for scores 60-69
// "F" for scores below 60
// Write a program to categorize several test scores into their respective letter grades.


// let grade = 78

// if (grade>= 90){
//     console.log("A")
// }else if((grade>=80)&&(grade<=89)){
//     console.log("B")
// }else if((grade>=70)&&(grade<=79)){
//     console.log("C")
// }else if((grade>=60)&&(grade<=69)){
//     console.log("D")
// }else if(grade<=60){
//     console.log("F")
// }




//Problem Statement:
//You want to determine what action a driver should take based on a traffic light's color. The rules are:
// "Stop" for red
// "Slow down" for yellow
// "Go" for green
// Write a program to simulate a driver's response to various traffic light colors.

// let x="red"
// let y="yellow"
// let z="Green"

// if (x){
//     console.log("Stop")
// }else if(y){
//    console.log("slow down")
// }else if(z) {
//   console.log("go")
// }else{
//   console.log("wrong color")
// }





//Problem Statement:
// You want to determine the benefits of a user based on their membership tier. The tiers and benefits are:
// "Gold" members receive "Free shipping and priority support."
// "Silver" members receive "Free shipping."
// "Bronze" members receive "Standard benefits."
// Write a program that checks the membership tier and outputs the corresponding benefits.

// let membershipTier = "bronze"

// if (membershipTier==="gold"){       // === means stright is sayin equal to but = means "that is" or "assigned "
//     console.log("Free shipping and priority support.")
// }else if (membershipTier==="silver"){
//     console.log("Free shipping.")
// }else if (membershipTier==="bronze"){
//     console.log("Standard benefits.")
// }




// Problem Statement:
// You want to suggest clothing based on the weather. The suggestions are:
// "Wear a coat" if the temperature is below 15°C.
// "Wear a jacket" if the temperature is between 15°C and 25°C.
// "Wear light clothing" if the temperature is above 25°C.
// Write a program that provides clothing suggestions for different temperatures.


// let temp= 40

// if (temp<15){
//     console.log("Wear a coat")
// }else if ((temp>=15)&&(temp<=25)){
//     console.log("Wear a jacket")
// }else if (temp>=25){
//     console.log("Wear light clothing")
// }