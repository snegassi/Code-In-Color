

// Question 3:
// How can you combine the map and filter methods in JavaScript to process
// and filter an array? Provide an example where an array is tripled and
// then filtered to include only odd numbers.
// Combining Map and Filter

// here we used 3 parameters, because the question said to use map and filter so the other one is array we are using
// always in the parameter put 3 argument anf in the call back the main function at the end put the call back argument in order of the function argument
//transformed is the end result arry. But is nos just declared it's tripled and then filtered
// map is replacing the arrays and filter is going through,matching it,and selecting it.
function procesAndFilterArray(arr,transformCallback, filterCallback){
    let transformed = arr.map(transformCallback);
    console.log(transformed);
    return transformed.filter(filterCallback);
    }
    // Callback Functions
    function triple(num){
    return num * 3;
    }
    function isOdd(num){
    return num % 2 !== 0;
    }
    // Using the combined function
    let numbers = [1,2,3,4,5];
    console.log(procesAndFilterArray(numbers, triple , isOdd));
    