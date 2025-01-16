
// Question 2:
// How can higher-order functions be used to filter an array based on specific
// conditions? Provide an example of filtering an array for even numbers
// and numbers greater than three.
// Higher Order Function

function filterArray(arr,callback){
    let result = [];
    for(let i=0; i<arr.length ; i++){
    if(callback(arr[i])){
    result.push(arr[i]);
    }
    }
    return result;
    }
    // Callback Functions
    function isEven(num){
    return num % 2 === 0;
    }
    function isGreaterThanThree(num){
    return num > 3;
    }
    // Using the higher order function
    let numbers = [1,2,3,4,5];
    //console.log(filterArray(numbers,isEven));
    console.log(filterArray(numbers,isGreaterThanThree));
    