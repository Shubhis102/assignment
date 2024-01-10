export default function navbar(){
let createNewDivs = document.createElement("div");
let  createNewUl =  document.createElement("ul");
createNewDivs.appendChild(createNewUl);
document.body.appendChild(createNewDivs);

let createli1 = document.createElement("li");
let textli1 = document.createTextNode("Home");
createli1.appendChild(textli1);
createNewUl.appendChild(createli1);

let createli2 = document.createElement("li");
let textli2 = document.createTextNode("About");
createli2.appendChild(textli2);
createNewUl.appendChild(createli2);

let createli3 = document.createElement("li");
let textli3 = document.createTextNode("Contact Us");
createli3.appendChild(textli3);
createNewUl.appendChild(createli3);

let createli4 = document.createElement("li");
let textli4 = document.createTextNode("Log in");
createli4.appendChild(textli4);
createNewUl.appendChild(createli4);

}

