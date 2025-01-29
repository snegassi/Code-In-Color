


//    Objects Questions:
  
//  1)Basic Object Creation:
//  Create an object to store information about a book, including properties like title, author, and yearPublished. Print the object.

const book ={
    title:"War Strategie",
    author: "Sun Tsu",
    yearPublished:1890
}
// console.log(book)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2)Accessing Properties:
// Write a program that accesses and prints the title and author properties from a given book object.

// console.log(book.title)
// console.log(book.author)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3)Updating Properties:
// Given an object representing a car with properties like make, model, and year,
//  write a program to update the year to the current year and print the updated object.

const car ={
    make:"Toyota", 
    model:"camry", 
    year:2000
}
 //car.year=2025;
//  console.log(car.year)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4)Adding Properties:
// Create an object to store a student's information (e.g., name, age). Add a new property grade to the object and assign it a value. 
// Print the updated object.
const studentInfo ={
    name:"bob",
    age:30
}

studentInfo.grade=3.5
// console.log(studentInfo.grade)
// console.log(studentInfo)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5)Deleting Properties:
// Create an object with properties name, age, and city. Delete the city property and print the updated object.
const person ={
    name:"Sandra",
    age:45,
    city:"Toronto"
}

//delete person.city;
//console.log(person)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6)Iterating Over an Object:
// Write a program to iterate over the properties of an object using a for...in loop and print each key and its value.

for(let key in person){
   // console.log(`${key}: ${person[key]}`)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7)Object with Methods:
// Create an object representing a rectangle with properties width and height. 
// Add a method calculateArea that returns the area of the rectangle. 
// Call the method and print the result.
 
const rectangle={
    width: 20,
    height: 40,

    calculateArea:function (){
        return  this.width * this.height  // Use `this` to access the object's properties
    }
}
// Call the method and print the result
let area=rectangle.calculateArea()
//
// console.log("Area of the rectangle is:",area)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 8)Array of Objects:
// Create an array of objects, where each object represents a student with properties name and grade. 
// Use a loop to print the name of each student who scored above 80.

const students = [
   { name: "Abas", grade: 91 },
   { name: "Bob", grade: 85 },
   { name: "Page", grade: 70 },
   { name: "amber", grade: 88 },
];

// Use for...of to iterate over the array, but if we were itterating from/over object we would use for...in 
for(let student of students){
      if (student.grade > 80){
     //  console.log (student.name) 
      }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 9)Dynamic Property Access:
// Write a program that takes a property name as input and prints the corresponding value from a given object. 
// If the property doesn’t exist, print a default message like "Property not found."

// Import prompt-sync(used inorder to use the prompt in the next line, we have to declare this here and now and type "npm install prompt-sync" in the terminal too)
// const prompt = require('prompt-sync')();

// // Object with some properties
// const student = {
//     name: "Alice",
//     grade: 92,
//     age: 21
//   };
  

//   // Take property name as input (simulate user input here for demonstration)
//   const propertyName = prompt("Enter the property name:"); // This is just for the web browser to input like name or grade or age
  
//   // ##### Check if the property exists in the object using "object.hasOwnProperty(propertyName)"
// // .hasOwnProperty() is a method used to check if an object contains a property as its own, not inherited.
// // It’s especially useful in situations where an object might have properties from its prototype chain, 
// // but you only want to check for properties that are directly part of the object itself
 
// if (student.hasOwnProperty(propertyName)) {
//     console.log(`${propertyName}: ${student[propertyName]}`); // Print the value of the property
//   } else {
//     console.log("Property not found."); // Default message if the property doesn't exist
//   }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 10)Merging Objects:
// Write a program to merge two objects into a single object. For example:
// const obj1 = { a: 1, b: 2 }
// const obj2 = { c: 3, d: 4 };
// const mergedObj = { ...obj1, ...obj2 };
// console.log(mergedObj);

// const obj1 = { a: 1, b: 2 }
// const obj2 = { c: 3, d: 4 };
// const mergedObject = Object.assign({},obj1,obj2)
// console.log(mergedObject)