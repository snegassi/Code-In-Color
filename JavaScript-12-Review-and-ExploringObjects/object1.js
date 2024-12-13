

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

// console.log(person.age)   // to just getting value and view it
// console.log(person["name"])


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
// console.log(vehicle)   // we use consol.log to view/ see the outcome

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

/**
 * 5)Scenario: Create an object called library with a property books, 
 * which is an array of three book titles (strings).
 */

// const library={
     
// }

// library.books=["good","bad","coding"] 
// console.log(library)


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


// console.log(animal.greet())  // so with ( ) it means we are calling it

// animal.type="cat"

// console.log(animal.greet()) 