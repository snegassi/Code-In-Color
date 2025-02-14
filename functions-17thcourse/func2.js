function filteringArray(arr) {
  let filtered = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] > 3) filtered.push(arr[i]);
  }
  return filtered;
}

//  calling the function
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filteringArray(arr)); // result= [ 4, 6, 8, 10 ]

/////////////////////////////////////////////////////////////////////////////////

// Question 2:
// How can higher-order functions be used to filter an array based on specific
// conditions? Provide an example of filtering an array for even numbers
// and numbers greater than three.
// Higher Order Function

function filterArray(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}


  // Callback Functions
  function isEven(num) {
    return num % 2 === 0;
  }
  function isGreaterThanThree(num) {
    return num > 3;
  }
  // Using the higher order function
  let numbers = [1, 2, 3, 4, 5];
  //console.log(filterArray(numbers,isEven));
  console.log(filterArray(numbers, isGreaterThanThree));

//////////////// OR /////////////////////////////////////////////////////////////////

// function filteringArray(arr,callback){
//     let filtered=[];

//     for (let i = 0; i < arr.length; i++) {
//         // Call the callback function for each element & check
//        if(callback(arr[i])){
//          // Only push the number that true in the callback
//         filtered.push(arr[i])

//        }
//     }

//     return filtered
// }

// // callback function

// function evenGreaterThan3(num){
//     if ((num %2===0)&&(num >3)){
//         // If the number is even and greater than 3, return it. If not leave it
//        return num
// }

// }
// // calling the main function

// let pack=[1,2,3,4,5,6,7,8,9,10]
// console.log(filteringArray(pack,evenGreaterThan3)) //result= [ 4, 6, 8, 10 ]
