const person1 = {
    firstname: "SpongeBob",
    lastname: "SquarePants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi! I am Spongebob!")},
    sayBye: function(){console.log("Bye Mrs!")},
}
const person2 = {
    firstname: "Patrick",
    lastname: "Star",
    age: 25,
    isEmployed: false,
    sayHello: function(){console.log("Hi! I am Patrick!")},
    sayBye: function(){console.log("Bye Mrs! Bruhhh...")},
}
const person3 = {
    firstname: "Anthoni",
    lastname: "Carvalho da Silva",
    age: 17,
    isEmployed: false,
    sayHello: () => console.log("Hi! I am Zaraki from Feilope Rpg's"),
    sayBye: () => console.log("(Punch Ur Face)"),
}
person3.sayBye();