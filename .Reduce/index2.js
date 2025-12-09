const grades = [7.5, 5.0, 9.0, 8.0, 6.0, 10.0 ];
const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(minimum);
function getMax (accumulator, element){
    return Math.max(accumulator, element);
}
function getMin (accumulator, element){
return Math.min(accumulator, element);
}