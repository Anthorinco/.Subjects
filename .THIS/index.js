const person1 = {
  name: "Anthorinco",
  favFood: "Filé Parmegiano",
  sayHello: function () {
    console.log(`Eai seu PORRA! minha comida favorita é ${this.favFood}`);
},
  eat: function (){console.log(`Estou comendo o ${this.favFood}!`)}
};
person1.eat();
