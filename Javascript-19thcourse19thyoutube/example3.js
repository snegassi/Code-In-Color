


/* 1)Person Class
- Create a Person class that takes a name and age in the constructor.
-Add a method called introduce() that returns a string; detailing the name and the age.
-Create multiple instances of Person, with different values, and Log the method call  */

class Person {
name
age

constructor(name, age) {
    this.name = name;
    this.age = age;

 }

introduce() {
    return `My name is ${this.name}, I am ${this.age} years old.`
 }

}

const joe = new Person ("Joe", 35)
console.log(joe.name)
console.log(joe.age)
console.log(joe.introduce)
console.log(joe.introduce())
