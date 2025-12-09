function displayPerson({firstName, lastName, age, job}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);

}


const person1 = {
    firstName: "Anthoni",
    lastName: "Carvalho da Silva",
    age: 17,
    job: "Vagabond",
}
const person2 = {
    firstName: "Manoel",
    lastName: "Gomes",
    age: 47,
    job: "Cantor",
}
const {firstName, lastName, age, job} = person1;

displayPerson(person1);