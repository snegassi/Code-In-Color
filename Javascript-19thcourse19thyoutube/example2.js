class Car {
    constructor(make,model,year,mileage) {
     // then make properties of this constructor, but the properties are public because they do not have this "._" indication
         this.make=make;
         this.model=model;
         this.year=year;
         // but milage is not public because when u c a car you can't tell immediatlt the mileage
         this._mileage=mileage;
         // private property but that is a "normal array" ,
         //  BUT later because of the relation of date and service making them object ({date,service}), 
         // the array becomess an array of object 
         this._serviceRecord=[];
    }

   //Getter for mileage=Static (you ask you, get.Based on the inpute. )
     get mileage(){
        return this._mileage;
    }
    //Setter for mileage
    set mileage(newMileage){
       if(newMileage >= this._mileage){
        this._mileage = newMileage;
    }
       else{
         console. log('Mileage cannot be decreased.');
    }
} 

// this next, since date and service "(date,service)"are both related they have to be under one object. 
// Hence, we push the entire object into an array ({date,service})

    addServiceRecord({date,service}){
        // the push is to indicate on how we input it into the array above
       this._serviceRecord.push(date,service);

    }
    //Getter for serviceRecirds
    get serviceRecords(){
        return this._serviceRecord
    }
   
      // Comparing mileages, since it's getter, the function of it becomes Static that uses the getter
     static compareMileage(car1,car2){
        if(car1.mileage > car2.mileage){
        console.log('$(car1.make) $(car1.model) has more mileage than $(car2.make) S(car2.model)');
        } 
        else if (car2.mileage < car1.mileage){
        console.log(' $(car2.make) $(car2.model) has more mileage than $(car1.make) S(car1.model)');
        } 
        else {
        console.log(' $(car2.make) $(car2.model)and $(car1.make) $(car1.model) have equal mileage');
        }
    } 
}       
        // So now basically check the mileage, by creating instances by Example Usage
        const car1 = new Car("Toyota","Camry",2010,120000);
        const car2 = new Car("Honda","Accord",2015,90000);
        
        console.log('${car1.make} ${car1.model} initial mileage: ${car1.mileage}');
        console.log('${car2.make} ${car2.model} initial mileage: ${car2.mileage}'); 


