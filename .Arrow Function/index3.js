const number = [1, 2, 3, 4, 5, 6];

const squares = number.map((element) => Math.pow(element, 2));
const cube = number.map((element) => Math.pow(element, 3));
const QuartaPow = number.map((element) => Math.pow(element, 4));
const evenNum = number.filter((element) => element % 2 === 0);
const oddNum = number.filter((element) => element % 2 !== 0);
const total = number.reduce((accumulator, element) => accumulator + element);



console.log(squares);
console.log(cube);
console.log(QuartaPow);
console.log(evenNum);
console.log(oddNum);
console.log(total);