// Question 1:
// What is a higher-order function, and how can it be used to process an array
// with a callback function? Provide an example where an array is processed
// to produce another array of doubled and squared values.
// Higher Order Function

//so arr is the arry we give it which is numbers(located at the bottom)
// the callback(arr)=either double(num) or square(num) and the (num) used here is just an indication that any number thats put in it
// the result array is the end result of this processArry and we end its function by writing "return result"
function processArray(arr,callback){
    let result = [];
    for(let i = 0; i < arr.length; i++){
    result.push(callback(arr[i]));
    }
    return result;
    }
    // Callback Functions
    function double(num){
    return num * 2;
    }
    function square(num){
    return num * num;
    }
    // Using the higher order function
    let numbers =[1,2,3,4,5];
    console.log(processArray(numbers, double));
    console.log(processArray(numbers, square));
    