const jsonNames = `["Anthoni", "Carvalho", "Silva", "Pietro"]`;
const jsonPerson = `{name: "Anthoni",age: 17,isHot: true,hobbies: ["Computaria", "Jogatinina", "Big thighs"],
}`;
const jsonPeople = [
`{"name": "Anthoni","age": 17,"isHot": true},
  {"name": "Carvalho","age": 71,"isHot": false},
  {"name": "Silva","age": 67,"isHot": true},
  {"name": "Da","age": 0,"isHot": false},`];

  const parsedData = JSON.parse(jsonNames);
  console.log(jsonNames)