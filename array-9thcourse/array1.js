


//Declare arrays
 let numbers = [1, 2, 3, 4, 5];
 let fruits = ["apple", "banana", "cherry"];
 
console.log(numbers)  // shows all items inside the brackets
console.log(fruits)

// Access elements by index (is used to find the location)
// console.log(numbers[0]); // Output: 1
// console.log(fruits[2]);  // Output: cherry

// Modify elements
// numbers[1] = 20; // Change the second element to 20
// console.log(numbers); // Output: [1, 20, 3, 4, 5]

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Examples for Array Methods in JavaScript

// // Push and Pop (Push= adds at the end of array and Pop =takes the last of the array)
// let fruits = ["apple", "banana"];

// // Add an element to the end
// fruits.push("cherry");
// console.log(fruits); // Output: ["apple", "banana", "cherry"]

// // Remove the last element
// fruits.pop();
// console.log(fruits); // Output: ["apple", "banana"]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Shift and Unshift
// let numbers = [2, 3, 4];

// // Remove the first element
// let first = numbers.shift();
// console.log(first);  // Output: 2
// console.log(numbers); // Output: [3, 4]

// // Add an element to the beginning
// numbers.unshift(1);
// console.log(numbers); // Output: [1, 3, 4]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Slice (your taking the selected parts only and leaving the other partd)
//  let animals = ["cat", "dog", "elephant", "tiger"];

// // // Get elements from index 1 to 3 (excluding 3)
//    animals.slice(1, 3)
// let sliced = animals.slice(1, 3);
//    //console.log(animals) ????????????????????
// console.log(sliced); // Output: ["dog", "elephant"]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// // Splice (your removing the selected parts only and replacing it with the other parts)
// let colors = ["red", "blue", "green"];

// // Remove and replace elements
// colors.splice(1, 1, "yellow", "pink");
// console.log(colors); // Output: ["red", "yellow", "pink", "green"]

// // Map
// let nums = [1, 2, 3, 4];

// // Multiply each element by 2
// let doubled = nums.map(num => num * 2);
// console.log(doubled); // Output: [2, 4, 6, 8]

// // Filter
// let values = [5, 10, 15, 20];

// // Keep elements greater than 10
// let filtered = values.filter(value => value > 10);
// console.log(filtered); // Output: [15, 20]

// // Reduce
// let array = [1, 2, 3, 4];

// // Sum all elements
// let sum = array.reduce((acc, curr) => acc + curr, 0);
// console.log(sum); // Output: 10

// // Find
// let nums2 = [10, 20, 30, 40];

// // Find the first number greater than 25
// let found = nums2.find(num => num > 25);
// console.log(found); // Output: 30

// // Sort
// let fruits2 = ["banana", "apple", "cherry"];
// let nums3 = [30, 10, 20];

// // Sort alphabetically
// fruits2.sort();
// console.log(fruits2); // Output: ["apple", "banana", "cherry"]

// // Sort numerically
// nums3.sort((a, b) => a - b);
// console.log(nums3); // Output: [10, 20, 30]

// //Aggregation

// // `reduce()`

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, current) => acc + current, 0);
// console.log(sum); // Output: 15

// //Explanation**: Adds all elements in the array starting from 0.

// //`concat()`

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const combined = array1.concat(array2);
// console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

// //Explanation**: Combines two arrays without modifying the original ones.

// // `join()`

// const words = ["Hello", "world", "!"];
// const sentence = words.join(" ");
// console.log(sentence); // Output: "Hello world !"

// //Explanation**: Joins all elements of the array into a single string, separated by a space.

// // `indexOf()` and `lastIndexOf()`

// const fruits = ["apple", "banana", "cherry", "apple"];
// console.log(fruits.indexOf("apple")); // Output: 0
// console.log(fruits.lastIndexOf("apple")); // Output: 3

// //Explanation**: `indexOf` finds the first occurrence, `lastIndexOf` finds the last occurrence of a specified element.

// //`includes()`

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.includes(3)); // Output: true
// console.log(numbers.includes(6)); // Output: false
// ```
// //Explanation**: Checks if the array contains a specific element.

