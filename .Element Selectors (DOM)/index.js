const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";


const fruits = document.getElementsByClassName("fruits");

fruits[0].style.backgroundColor = "red"
fruits[1].style.backgroundColor = "Orange"
fruits[2].style.backgroundColor = "Yellow"


const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

for(let h4Element of h4Elements){
    h4Element.style.backgroundColor = "green";}

for (let liElement of liElements){
    liElement.style.backgroundColor = "grey"
}

const element = document.querySelectorAll(".fruits");

element[0].style.fontWeight = "bold"
element[1].style.fontWeight = "bold"
element[2].style.fontWeight = "bold"
