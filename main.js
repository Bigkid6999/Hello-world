//JavaScript code
// Add Event listener
document.getElementById("btn").addEventListener("click", sayGreeting);


function sayGreeting() {

let pizzaOrder = +prompt("What is you Pizza Order?");
let size = +prompt("What size would you like?");

//Procces
let msg = 'Your  ${pizzaOrder} pizza will be ready in 20 minutes';
//Output
alert(msg);
}