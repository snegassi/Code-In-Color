
// Yansim Session

class Car {
    #mileage
    #serviceRecord
    constructor(make,model,year,mileage) {
     // then make properties of this constructor, but the properties are public because they do not have this "._" indication
         this.make=make;
         this.model=model;
         this.year=year;
         // but milage is not public because when u c a car you can't tell immediatly the mileage
         this.#mileage=mileage;
         // private property but that is a "normal array" ,
         //  BUT later because of the relation of date and service making them object ({date,service}), 
         // the array becomess an "array of object" 
         this.#serviceRecord=[];
    }

   //Getter for mileage=Static (you ask you, get.Based on the inpute. )
     getMileage(){
        return this.#mileage;
    }
    //Setter for mileage
    setMileage(newMileage){
       if(newMileage >= this.#mileage){

        // this next line is saying if the newMilage is equal or higher replace the Old mileage number, since newMileage is always higher than the old mileage
        this.#mileage = newMileage;
    }
       else{
         console. log('Mileage cannot be decreased.');
    }
} 

// this next, since date and service "(date,service)"are both related they have to be under one object. 
// Hence, we push the entire object into an array ({date,service})

// this is below function is method, although we should write a "function" word before it since its inside the Class its already understood as function so no nead
    addServiceRecord({date,service}){
        // the push is to indicate on how we input it into the array above
       this.#serviceRecord.push(date,service);

    }
    //Getter for serviceRecirds
    getServiceRecords(){
        return this.#serviceRecord
    }
   
      // Comparing mileagesis method, with Static since it's inside the Class, the objects car1 and car2 use car1.mileage or car2.model to acess the fields as well since the fields are Public
     static compareMileage(car1,car2){
        if(car1.mileage > car2.mileage){
        console.log(`${car1.make} ${car1.model} has more mileage than ${car2.make} ${car2.model}`);
        } 
        else if (car2.mileage < car1.mileage){
        console.log(`${car2.make} ${car2.model} has more mileage than ${car1.make} ${car1.model}`);
        } 
        else {
        console.log(`${car1.make} ${car1.model} and ${car2.make} ${car2.model} have equal mileage`);
        }
    } 
}       
        // So now basically declaring/creating instances below
        const car1 = new Car("Toyota","Camry",2010,120000);
        const car2 = new Car("Honda","Accord",2015,90000);
        
        // this below, is how we can use getters value/function 
        console.log(`${car1.make} ${car1.model} initial mileage: ${car1.mileage}`);
        console.log(`${car2.make} ${car2.model} initial mileage: ${car2.mileage}`); 
 
// how do we access the "get serviceRecords()" and "addServiceRecord({date,service}) "

    //   console.log(Car.compareMileage(car1,car2))

// to access the Static, we use the class name "Car." 1st to access it,and since the method/function compareMileage(car1,car2) has console.log ,so we do not need to console.log it below
    Car.compareMileage(car1,car2)


    car1.addServiceRecord({date:"25-02-2025", service:24000})
    car2.addServiceRecord({date:"25-02-2025", service:24000})
    console.log(car1.serviceRecord) // works only with the above addServiceRecord({date,service})