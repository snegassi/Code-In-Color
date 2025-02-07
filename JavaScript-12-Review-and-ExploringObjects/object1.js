

/* 
1) Scenario: Create an object called person, with the properties name (string), age (number), and
 isStudent (boolean). Practice accessing and console.log the properties
  using both dot notation and square bracket notation.
*/

// this is done

//  const person={
//     name:"John",
//     age: 25,
//     isStudent: true,
//  }

// Using dot notation to accessing it, to just getting value and view it
// console.log(person.age)

// ### Using square bracket to accessing the value and viewing it, we use the double/single quote to the key to access it as the key is a string
// console.log(person["name"])  

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
2) Scenario: Add a new property isElectric with the value of false to the following object.
const vehicle = {
	type: “bike”,
	speed: 20
}
 */
// const vehicle = {
// 	type: "bike",
// 	speed: 20,
//    //car: "bmw"
// }

// vehicle.isElectric=false // we can use it to ADD (key:value), even the next line
// vehicle['car']="toyota"    

// console.log(vehicle)     // we use consol.log to view/ see the outcome

// vehicle.speed=40       // we can use it to Change the value of specific key too
// console.log(vehicle)   // we use consol.log to view/see the outcome

/////////////////////////////////////////////////////////////////////////////////////////////

/**
 3) Scenario: Update the age property of this object to 25
     const user = {
	  name: “Alice”,
	  age: 24

}
 */
// done 
// const user = {
//    name: 'Alice',
//    age: 24
// }

// user.age=50
// console.log(user)

///////////////////////////////////////////////////////////////////////////////////////////////

/**
 4)Scenario: Remove the year property from this object
   const movie = {
	title: “Inception”,
	year: 2010,
	genre: “Sci-Fi”
}
 */

// const movie = {
// 	title: 'Inception',
// 	year: 2010,
// 	genre: 'Sci-Fi'
// }

// delete movie.year   // but if we want to delete, 1st "delete" then 'name of function' then "." then "key"
// console.log(movie)

////////////////////////////////////////////////////////////////////////////////////////////

/** How do we access the city or zip */
// const obj={
//     name: "Bob",
// 	address:{
// 		city: "New York",
// 		zip: 1001,
// 	}

// }

// // All of the following works in calling it 
//  console.log(obj.address.city)
//  console.log(obj["address"]["zip"])
//  console.log(obj.address["zip"])
//  console.log(obj['address'].zip)

/////////////////////////////////////////////////////////////////////////////////////////////////////////


/** How do we access the "email" from the variable key? */

//    const key ="email"
//    const obj={
// 	  name: "Alice",
// 	  email:"alice@hotmail.com"
//    }

//    console.log(key)  // this is the right way to get email
//    console.log(obj.key)  // this is the wrong way and the output= undefined as key is not a key of obj.
   

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //##### Ways of Adding and Changing/Modifing of Properties to Objects they are both the same.
/**
 * 5)Scenario: Create an object called library with a property books, 
 * which is an array of three book titles (strings).
 */

const library={
     
}

library.books=["good","bad","coding"] 
console.log(library)

//////////////////////

// const person= {
// 	name:"Alice",

// }

// person.age = 25; // Adding Age using Dot Notation of Properties
// person["city"] = "Los Angelies" // Adding  City using Bracket Notation of Properties

// console.log(person)

// // and 

// const car={
// 	make:"Toyota",
// 	year:2020
// } 

//   car["make"]= "BMW"; // Changing/Modifying of make of properties
//   car.year=2025;  // Changing/Modifying of year of properties

//   console.log(car)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

       // ####### the Use of "this" keyword #######
/**
 *6) Scenario: Add a method called greet to the object below that prints “Hello, I am a dog!”. 
 Note: it’s printing the type, so if the animal is a cat, it should say, “Hello, I am a cat!”
     const animal = {
	  type: “dog”,
	  legs: 4
}
 */

// const animal = {
//    type: 'dog',
//    legs: 4,
//    greet: function(){
//       return `Hello, I am a ${this.type}!`
//    }
// }

// ##### "this". = lets us grab/reference the object that it's within/foundin on this case object =animal, technically this === animal/ any object
// ##### then "type" is the key thats found within the animal object.
// ##### So that means, this.type= robot.type=dog.
// ##### Hence "this.type"= dog and "this.legs"= 4

//#### return is what comes out of the function()

// console.log(animal.greet())  // so with ( ) it means we are calling it

// animal.type="cat"

// console.log(animal.greet()) 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// #### deleting properties in Object

// const book ={
// 	title:"1984",
// 	author:"George Orwell",
// 	year:2000
// }

// delete book.author // Using the delete keyword with dot notation 
// console.log(book)
// delete book["year"] // Using the delete keyword with Square notation
// console.log(book)


///////////////////////////////////////////////////////////////////////////////////////

//############### How to get/obtain specifically all the keys or values seperately 

// const car={
// 	make:"Toyota",
// 	model:"camry",
// 	year:2025,
// }

// console.log(Object.keys(car))         // how to get all the keys only, in array format      
// console.log(Object.values(car))      // how to get all the values only, in array format


  
// // #### "this Object prebuilt-class" Object. "this keys is also a built in key, like the Object. But it has() which the object in use get to be put in. In this case the object is car" keys(car)
//                                    //  0       1      2 
//  const keysArray=Object.keys(car) // ["make","model","year"] this give me  all the keys in array
// //  console.log(keysArray)


// //  // #### 1st method of looping through Object 
// //  // because the keys are in array we can also loop through using indexing, to get the values using the keys
//  for (let i =0; i < keysArray.length;i++) {   // this gives me the Values in a loop/iteration
// 	console.log(car[keysArray[i]])
// }


//#### 2nd method of looping through Object to get the all values OR keys seperately

// const person ={
// 	name:"Alice",
// 	age:25,
// 	city:"New York",
// }

//  // // next line is how to get all the values only
//  // // Here, we are using a built-in key so even if we change the"key" to any name like x or else, it's still as if we are accessing the keys in object person.
// // // But the key should be inside a bracket and not after a "." dot notation. Because if we do "." then is going to go and look for a "key" : something something inside the person object.
// for(let key in person){
// 	//console.log(key)          //logs each key: name,age,city 
// 	console.log(person[key])   // how to get all the values only
// }


///###### diference between the use of "for...in" and "for...of loops" in JavaScript
//	"for...in"
// Purpose: Iterates over keys (property names).
// Best used: When working with objects to iterate over keys, as well as arrays (but not recommended for arrays).
//Returns: The property keys of the object.

// const obj = { 
//   name: "Alice",
//    age: 25, 
//    city: "Toronto"
//    };

// for (let key in obj) {
//   //console.log(key); // Outputs: "name", "age", "city"
//   console.log(obj[key]); // Outputs the values: "Alice", 25, "Toronto"
// }

//////// But for "for...of loops" is best used in Arrays,Strings or Maps BUT NOT IN Objects, however go lower if want to use it to get values

// Purpose: Used to iterate over the values of an iterable object.
//Best used:When working with iterables like arrays, strings, or maps to get values directly..
// Returns: The values of the iterable.

// const arr = [10, 20, 30];

// for (let value of arr) {
//   console.log(value); // Outputs: 10, 20, 30
// }
 //### if we decise to use "for...of loops" in Objects to get Values we use "Object.values()"
//     for (const value of Object.values(obj)) {
//             console.log(value); // Access each value of the object
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//### this following "Object.entries()" is used to produces an array of BOTH key-values of the object person,

// let propertiesBoth=Object.entries(person)
// console.log(propertiesBoth)

//###  How to use Object methods to creat new object, merge objects , updating and overriding objects

// const person = {
// 	isHuman: false,
// 	printIntroduction: function () {
// 	  console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
// 	},
//   };
  
//   //### object me uses object person's properties (prototype/blueprint), 
//   // as if it was its own and simplely adds its properties by declaring it OR go below
//   const me = Object.create(person);
  
//   me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
//   me.isHuman = true; // Inherited properties can be overwritten
  
//  //me.printIntroduction(); // Expected output: "My name is Matthew. Am I human? true"
  

//#### OR objects dog can add the properties (prototype/blueprint) of object animal into its own properties.

// const ani= {
// 	species: "animal",
//   };
  
//   const dog = Object.create(ani, {
// 	breed: {
// 	  value: "Golden Retriever",
// 	  writable: false,
// 	  enumerable: true,
// 	},
// 	bark: {
// 	  value: function () {
// 		console.log("Woof!");
// 	  },
// 	  enumerable: true,
// 	},
//   });
  
//   console.log(dog.species); // Output: animal (inherited from `animal`)
//   console.log(dog.breed);   // Output: Golden Retriever
//   dog.bark();               // Output: Woof!


  //##### OR N.B., SEE THE DIFFERENCE BETWEEN Object.create() vs Object.assign()

   /**
   *  Here:
  -The child object has its own property name, but it inherits the greet method from parent.
  -If you modify parent.greet, it will affect child.greet too because they are linked.
 - In simpler terms, Object.create() sets up a link between the new object and the old one. It's great for creating objects that share functionality,
   like when working with shared tasks or features in a team (like supporting a patient plan).
  
  If you need a copy of properties, you’d use something like Object.assign() instead.
   * 
   */

  // const parent = {
	// greet: function () {
	//   console.log("Hello!");
	// },
  // };
  
  // const child = Object.create(parent);
  // child.name = "John";
  
  // console.log(child.name); // Output: John (own property)
  // // child.greet();           // Output: Hello! (inherited from parent)  ????????
  // console.log(child.greet())                                              ???????
 
 
  //####  To copy properties use one of the following: spread operator (...)  vs Object.assign()

  /*
  -Use the spread operator (...) for its simplicity and readability.
  -The spread operator can work with arrays, but Object.assign() is designed for objects only.
  -Use Object.assign() when working with prototypes or when you need older browser compatibility (spread operator may not work in older browsers).
  In modern JavaScript, the spread operator is often preferred because it is cleaner and easier to use.
 */

 // #### Spread Operator (...): More concise and easier to read.

// const obj1 = { a: 1 };
// const obj2 = { b: 2 };

// const merged = { ...obj1, ...obj2 };
// console.log(merged); // Output: { a: 1, b: 2 }

//##### Object.assign(): Slightly more verbose and requires passing the target as the first argument.

// const obj1 = { a: 1 };
// const obj2 = { b: 2 };

// const merged = Object.assign({}, obj1, obj2);
// console.log(merged); // Output: { a: 1, b: 2 }

///////////////////////////// BUT /////////////////////////// 

// ### In Handling Prototypes
//#### Spread Operator: Ignores non-enumerable properties (like methods from the prototype).

// const parent = { greet() { console.log("Hello!"); } };
// const child = { ...parent };
// console.log(child.greet); // Output: undefined

//#### Object.assign(): Copies enumerable and own properties, including from the prototype.

// const parent = { greet() { console.log("Hello!"); } };
// const child = Object.assign({}, parent);
// console.log(child.greet); // Output: function greet() { console.log("Hello!"); }

