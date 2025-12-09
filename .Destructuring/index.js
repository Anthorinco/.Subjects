// EXAMPLE 1
let a = 1;
let b = 2;

[a,b] = [b, a];

//console.log(a);
//console.log(b);
// EXAMPLE 2
const colors = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
console.log(firstColor)
console.log(secondColor)
console.log(thirdColor)
console.log(extraColors)

