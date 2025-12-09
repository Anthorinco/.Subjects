class Person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person(
  "Anthorinco",
  17,
  "Rua maluquinha",
  "Cugarto",
  "Bostil"
);
const person2 = new Person(
  "Anthoninico",
  170,
  "Rua da Resenha",
  "Cugarto",
  "Bostil"
);

console.log(person1.address);

