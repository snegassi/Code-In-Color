

// Question 4:
// How can higher-order functions be used to process an array of strings
// with callback functions? Provide an example where each string in an array
// is converted to uppercase and appended with an exclamation mark.
// Higher Order Function
// Callback Functions
// Using the higher order function


// function main(arr,Callback){
//     let result= []
//        for (i=0;i<arr.length;i++){
//     result.push(Callback(arr[i]))
// } 
// return result;

// }  


// //call back function

// function converted(num){
    
//     return num.toUpperCase()
// }


// 2nd solution
// function main(arr){
//         let result= []
//            for (i=0;i<arr.length;i++){
//         result.push(arr[i].toUpperCase())
//     } 
//     return result;
    
//     }  
  
//  using Map
function main(arr,Callback){
    let result= arr.map(Callback)

       //for (i=0;i<arr.length;i++){
    //result.push.map(Callback())

    return result; 
}


//call back function

function converted(num){
    
    return num.toUpperCase()
   
}

// used arrays
let letter=["hey","hello","you","are","fine"];
let Do="bye"
  Do.toUpperCase()
//console.log(main(letter,converted));
// for 2nd solution call
//console.log(main(letter));
//for 3rd solution call
console.log(main(letter,converted)); 
console.log(main())
