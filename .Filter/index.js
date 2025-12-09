const words = ["Banana", "Orange", "Watermelon", "Dragon Fruit"];
const ShortWords = words.filter(getShortWords);
const LongWords = words.filter(getLongWords);
console.log(LongWords)

function getShortWords(element){
    return element.length <=6;
}
function getLongWords(element){
    return element.length > 6;
}