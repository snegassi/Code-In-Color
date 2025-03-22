

 /*For making this kind of comment use Shift + Alt + A  */

class Person {
    constructor(name, age){
        // then make properties of this constructor, but the properties are private because of "._" indication
        this._name = name;
        this._age = age;
    }
    //Getter for name
    get name() {
    return this._name;
    }
    //Setter for name
    set name(newName){
         if(newName.length < 2){
             console. log('Name must be at least 2 characters long.');
        }
         else{
             this._name = newName;
        }
    }
    //Getter for age
    get age( ){
    return this._age;
    }
    //Setter for age
    set age(newAge){
        if(newAge < 0){
           console. log('Age cannot be negative.');
        }
       else{
           this._age = newAge;
        }
}
}

//Example Use
const person1 = new Person('Alice', 25);
const person2 = new Person('John', 25);
console.log(person1.name); // called the name= "get" the name, getter
person1.name = 'Bob'; // Assigned / declared the name = "set" the name, setter
console. log(person1.name);

console. log(person1.age);
person1.age = 30;  
console.log(person1.age);

console.log(person2.age);
person2.age = 40;
console. log(person2.age);

// So we can basically change the values of the properties however we like, but staying with-in the requirments of the property it'self