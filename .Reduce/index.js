const prices = [20, 50, 100, 200, 300];
const total = prices.reduce(sum);

console.log(`Your Total is ${total}R$`);

function sum(accumulator, element) {
  return accumulator + element;
}
