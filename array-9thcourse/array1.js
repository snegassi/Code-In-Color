


// Declare arrays

//  let numbers = [1, 2, 3, 4, 5];
//  let fruits = ["apple", "banana", "cherry"];
 
// console.log(numbers)  // shows all items inside the brackets
// console.log(fruits)

// Access elements by index (is used to find the location)
// console.log(numbers[0]); // Output: 1
// console.log(fruits[2]);  // Output: cherry

// Modify elements
// numbers[1] = 20; // Change the second element to 20
// console.log(numbers); // Output: [1, 20, 3, 4, 5]
//  fruits[0]= "mango"
// console.log(fruits) // Output= ["mango", "banana", "cherry"]

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Examples for Array Methods in JavaScript

// // Push and Pop (Push= adds at the end of array and Pop =takes the last of the array)
// let fruits = ["apple", "banana"];

// // Add a single or multiple elements to the end using "push() function"
// fruits.push("cherry","mango");
// console.log(fruits); // Output: ["apple", "banana", "cherry","mango"]

// // //but when  want to Remove we use pop(), but it only removes a single and the last element only
// fruits.pop();
// console.log(fruits); // Output: [ 'apple', 'banana', 'cherry' ]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Shift and Unshift
//  let numbers = [2, 3, 4];

// // Remove the 1st single element only
// // we declared a variable called first, because we want to save the removed item 
// // but if we didnt want to save it we could just write it as, first = numbers.shift();  

// let first = numbers.shift();  
// console.log(first);  // Output: 2
// console.log(numbers); // Output: [3, 4]

// // but when Adding, we can add a single or multiple elements to the beginning
// numbers.unshift(1,8);
// console.log(numbers); // Output: [1,8, 3, 4]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Slice Only Copys (your taking the selected/copying parts only and taking it to your new array but the original array remains unaffected)
//  let animals = ["cat", "dog", "elephant", "tiger"];

// // #### important => Get elements from index 1 to 3 (excluding 3), so 1 and 2 are removed but the main array is not affected by the changes though.
// //  animals.slice(1, 3)
//  let sliced = animals.slice(1, 3);
// console.log(animals) // Well the original array remains unaffected
// console.log(sliced); // Output: ["dog", "elephant"]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Splice Removes OR Replaces OR Both (your removing the selected parts only and replacing it with the other parts)
//let colors = ["red", "blue", "green"];

// // // All splice() does is Remove and replace elements! ### important => Get elements from index 1 to 2, so 1 and 2 are removed and replaced at the same time
// //  and the main array is affected/changed by the changes though.
//  let newColor = colors.splice(1, 2, "yellow", "pink");
// console.log(newColor) // the ones that got removed 1 and 2 only
// console.log(colors); // Output: ["red", "yellow", "pink"]
// colors.splice(1,2)  
// console.log(colors)  // output: ["red"]



// sort(), sorts our array alphabetically and same with numbers
// let colors = ["red", "blue", "green"];
// colors.sort()
// console.log(colors)



// // reverse(), does the opposite/reverse alphabetically order of our array and same with numbers
// colors.reverse()
// console.log(colors)


// Map
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
//Explanation**: Adds all elements in the array starting from 0.

//const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, current) => acc + current, 0);
// console.log(sum); // Output: 15

// //`concat()`
//Explanation**: Combines two arrays without modifying the original ones.

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const combined = array1.concat(array2);
// console.log(combined); // Output: [1, 2, 3, 4, 5, 6]



// // `join()`
//Explanation**: Joins all elements of the array into a single string, separated by a space.

// const words = ["Hello", "world", "!"];
//const sentence = words.join(); // Output= Hello, world, !, so it comes with commas, so to remove that we use qutes and a space between them like the next one
// const sentence = words.join(" ");
// console.log(sentence); // Output: Hello world !, so now it does't have comma


// // `indexOf()` and `lastIndexOf()`
//Explanation**: `indexOf` finds the first occurrence, `lastIndexOf` finds the last occurrence of a specified element.

//const fruits = ["apple", "banana", "cherry", "apple"];
// console.log(fruits.indexOf("apple")); // Output: 0
// console.log(fruits.lastIndexOf("apple")); // Output: 3

//  console.log(fruits.indexOf("cherry")); // Output: 0
//  console.log(fruits.lastIndexOf("apple"));/// Output: 3

// //`includes()`
//Explanation**: Checks if the array contains a specific element or not, so it give out a boolean output.

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.includes(3)); // Output: true
// console.log(numbers.includes(6)); // Output: false
// ```


//Spread operator

// Copying Arrays
// let array1=[1,2,3,4];
// // let array2=array1;   // Copying one array to another is a problem, b/se of changes of datatypes, merging two arrays might cause a problem.thats why spread operator is needed.
// let array2=[...array1] // this is the correct one with spread operator, causes no problem
// console.log(array2)


// // Merging Array
// let array3=[5,6,7,8];
// let merged=[...array1,...array3]
// console.log(merged)


// 2D Arrays

// let matrix=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];

//     // Access specific element
//     // so 1st Rows=i, then 2nd Columns=j

//       console.log(matrix[0][2]);// output=3
//       console.log(matrix);// displays the entire matrix

//    // Iterate thourgh rows and columns
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j   < matrix[i].length; j++) {
//             console.log(matrix[i][j]);
            
//         }
        
//     }

//     //  Modify/Change an element
//    // to change 5
//     matrix[1][1]= 42;
//     console.log(matrix)
    