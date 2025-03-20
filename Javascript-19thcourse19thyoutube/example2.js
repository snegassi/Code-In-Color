class Car {
    constructor(make,model,year,mileage) {
     // then make properties of this constructor, but the properties are public because they do not have this "._" indication
         this.make=make;
         this.model=model;
         this.year=year;
         // but milage is not public because when u c a car you can't tell immediatlt the mileage
         this._mileage=mileage;
         // private property but that is an array
         this._serviceRecord=[];
    }
}