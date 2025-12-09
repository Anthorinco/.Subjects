class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  move(speed) {
    console.log(`The ${this.name} moves at a speed of ${speed}KPH`);
  }
}
class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age);
    this.runSpeed = runSpeed;
  }
  run() {
    console.log(`This ${this.name} can run!`);
    super.move(this.runSpeed);
  }
}
class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }
  swim() {
    console.log(`This ${this.name} can swim!`);
    super.move(this.swimSpeed);
  }
}
class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    super(name, age);
    this.flySpeed = flySpeed;
  }
  fly() {
    console.log(`This ${this.name} can fly!`);
    super.move(this.flySpeed);
  }
}

const rabbit = new Rabbit("BonJovi", 2, 40);
const fish = new Fish("Peixonauta", 5, 35);
const hawk = new Hawk("Creed", 3, 85);

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);
fish.swim();