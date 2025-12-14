 // .firstElementChild
 const element = document.getElementById("vegetables");
 const firstChild = element.firstElementChild;

 const ulElements = document.querySelectorAll("ul");

 ulElements.forEach(ulElements =>{
    const firstChild = ulElements.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
 });

 // .lastElementChild
 const element2 = document.getElementById("fruits");
 const lastChild = element2.lastElementChild;

ulElements.forEach(ulElements =>{
    const lastChild = ulElements.lastElementChild;
    lastChild.style.backgroundColor = "purple";
 });
 
 // .NextElementSiblings

FirstElement = document.querySelectorAll("#apple, #carrots, #cake");
SecondElement = document.querySelectorAll("#banana, #potatoes, #ice-cream");

 
 FirstElement.forEach(FirstElement =>{
    const nextSibling = FirstElement.nextElementSibling
    nextSibling.style.backgroundColor = "blue";
 });
 // .previousElementSibling
 FirstElement = document.querySelectorAll("#apple, #carrots, #cake");
 
 SecondElement.forEach(SecondElement =>{
    const prevSibling = SecondElement.previousElementSibling
    prevSibling.style.border = "10px solid black";
    });

// .parentElement
const element4 = document.getElementsByTagName("ul")[0];
const parent = element4.parentElement;
parent.style.color = "green";
// .Children

const element5 = document.getElementsByTagName("body")[0];
const children = element5.children;

Array.from(children).forEach(child => {
    child.style.fontWeight = "bold"
});
