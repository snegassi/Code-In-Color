
// Aleem Session

/* 1)Person Class
- Create a Person class that takes a name and age in the constructor.
-Add a method called introduce() that returns a string; detailing the name and the age.
-Create multiple instances of Person, with different values, and Log the method call  */

// class Person {
// name
// age

// constructor(name, age) {
//     this.name = name;
//     this.age = age;

//  }

// introduce() {
//     return `My name is ${this.name}, I am ${this.age} years old.`
//  }

// }

// const joe = new Person ("Joe", 35) // here we're just creating an object that's called "joe" that has properties of name,age and fuction
// console.log(joe.name) //here we're listing the values assosiated with the key, output Joe
// console.log(joe.age) //here we're listing the values assosiated with the key,output 35
// console.log(joe.introduce) // here we're listing the values assosiated with the key,output just states that
// console.log(joe.introduce()) //here we're calling function that's within the object, the output My name is Joe,I am 35 years old


/**
 2. Rectangle class
. Create a Rectongle class with width and height (make them private)
. Add a method getArea() that calculates and returns the area
- Add a method getPerimeter() that calculates and returns the perimeter
. Create some instances, and console Log
 */

 class Rectangle {
   // we use the "#" Since they are Private fields, and we have to list them out as it is blew as well with #, if not it will not work
     #width
     #height

   // Constructor
     constructor (width, height) {
   
        this.#width = width;
        this.#height = height;
 }

    // Methods
    getArea() {
       return this.#width * this.#height;

 }

    getPerimeter() {
      return 2 * (this.#width + this.#height)

 }
}

const square = new Rectangle (5,5)
//console.log(square.width) // this gets us undefined, which is the benefit/because of using Private
// console.log(square.getArea()) // here we are using console.log to call the function because the inside the functions above it's output is not console.log but a return so if it was consol.log since we view it we don need to call to use console.log down here again but since it is a return above and we can't view it witout console.log we use console.log
// console.log(square.getPerimeter()) // '' '' '' same here too



/**
 * * TO DO: Book Class
. Create a Book class that has private fields: title, author, pages
. In the constructor, initiatize these with values passed in as arguments
. Add a method, get Summary() that returns a string summarizing the detaits of the title, author, and #pages
. Add getters and setters for all the private fields (returns specific values and option to modify)|
 */

class Book {
   // for private use "#"
   #title
   #author
   #pages

   constructor(title, author, pages) {
      this.#title = title;
      this.#author = author;
      this.#pages = pages;

   }

   // Now we write methods

   summary(){
      return `This book is called ${this.#title}, it's written by ${this.#author} and has ${this.#pages} pages.`
   }

   // getters/ obtains parameters value as it is

   getTitle (){
      return this.#title
   }
   
   getAuthor(){
      return this.#author
   }
   
   getPages (){
      return this.#pages
   }

   // setters / were we modify the parameter values

   setTitle (title){
      //this.#title represents the value that's already in the class while title represents the new title given from the instance below
      this.#title = title
   }
   
   // setAuthor (author){
   //    if (){

   //    }
   // }
}

// this function is used on the outside of the Class, because we can use function outside the Class too but use the getters and setters of the Class 
// the parameters used are objects of book1 and book2. But to access the title we can't use the book1.#title as the title is private filed inside the Class that can only be accessed with the class
// but getters and setters are Public Functions, so the can be accessed and used as a susbstitute for #title
function compare (book1, book2){
   if (book1.getPages() > book2.getPages() ){
      return `The book with a title ${book1.getTitle()} has more pages than the book with a title ${book2.getTitle()} `
   }
   else if (book2.getPages() > book1.getPages()){
      return `The book with a title ${book2.getTitle()} has more pages than the book with a title ${book1.getTitle()} `
   }
   else{
      return `The book with a title ${book1.getTitle()} has the same pages as the book with a title ${book2.getTitle()} `
   }
}


// we dont pass objects but we can pass values=variables "this.#"
 
// this book1 and book2 are called are instance but they are objects with values, but we are constructing them meaning declaring them
const book1= new Book("Mistry Man","Daniel",200)
const book2= new Book("Beauty","Mary",500)

// based on the declaration and class with methods, here we are accessing them
// book1.setTitle("New Title") // use the setter to change the name 
// console.log(book1.getTitle()) // then use the getter to access/return the updated title 

// I'm just calling the function called setPages but at the same time we're passing parameters which in this case are objects
console.log(compare(book1,book2))


/**
 *Person & Employee
. Create a Person class with a constructor that takes name and age (# private)
. Add some methods, such as getName, changeName, getAge, birthday, greet (Person)
. Create an Employee class that extends the Person, make use of super keyword
Create an instance of Employee, and confirm that you can call the methods that are in Person
 */


// class Person {
//   // Flelds
//      #name
//      #age

//   // Constructor
//     constructor (name, age){
//           this.#name = name;
//           this.#age = age;
//     }
//   // Getters
//    getName (){
//         return this.#name;
//      }

//    getAge (){
//       return this.#age;
//    }

//   // Setters
//   changeName (newName){
//       return this.#name = newName;
//    }

//    birthday(){
//       this.#age = this.#age + 1;

//    }

//   //methods, that do other things and it neither a getter or setter
//   greet(){
//    return `My name is ${this.#name}, I am ${this.#age} years old.`
// }
// }

// Subclass inherits Parent methods/fields, extend inherits the properties,methods and fields of Parent class which is Person here
// class Employee extends Person {

//    // Flelds? based on the question since we are not going to create new fields and use only the parents's field. 
//    // Here we don't need it.

//    // Constructor? in this class we only need constructor and maybe a little method, but not fields,getters,or setters

//     constructor (name, age){
//     // super inherits the properties of the parent constructor
//      super(name, age)
//     }
// }

// let jane = new Employee ("Jane", 25);
// console.log(jane.getAge())// this with console.log shows, the output of initial age which is 25
// jane.birthday() // this without console.log updates the age using the birthday-method/function
// console.log(jane.getAge()) // this since with console.log shows but the update age after it's been updated by the birthday-method/function
// console.log(jane.greet()) // this with console.log shows, the out put of greet-method/function
// jane.changeName("Mary") // this without console.log updates the name using the changeNmae-method/function
// console.log(jane.greet())
