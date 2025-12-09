class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName.length > 0)
      this._firstName = newFirstName;
    else {
      console.error("Put a valid firstName!");
    }
  }
  set lastName(newLastName) {
    if (typeof newLastName === "string" && newLastName.length > 0)
      this._lastName = newLastName;
    else {
      console.error("Put a valid lastName!");
    }
  }
  set age(newAge) {
    if (typeof newAge === "number" && newAge >= 0) this._age = newAge;
    else {
      console.error("Put a valid number");
    }
  }

  get firstName(){
    return this._firstName;
  }
  get lastName(){
    return this._lastName;
  }
  get fullName(){
    return this._firstName + " " + this.lastName;
  }
  get age(){
    return `${this._age} Years Old`
  }
}
const person = new Person("Anthoni", "Carvalho da Silva", 17);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);
