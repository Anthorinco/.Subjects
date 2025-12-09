function Car(make, model, year, color){
this.make = make,
this.model = model,
this.year = year,
this.color = color
this.drive = function(){console.log(`You drive the ${this.model}`)}
};

const car1 = new Car("Hyundai", "HB20", 2025, "White");
const car2 = new Car("BYD", "Seal", 2024, "Dark-Blue");
const car3 = new Car ("Dodge", "Charger", 2020, "silver");

car1.drive();
car2.drive();
car3.drive();


console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);


