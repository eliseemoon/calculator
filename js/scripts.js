function saySomething(whatToSay) {
  window.alert(whatToSay);
}

function add(number1, number2) {
  return number1 + number2;
}

saySomething("hi");
add(3, 5);
const result = add(3, 5);
window.alert(result);
const outputText = "The sum is " + result + ".";
saySomething(outputText);
// business logic
function add(number1, number2) {
  return number1 + number2;
}

// user interface logic 
window.alert(add(10,5));
// business logic
function add(number1, number2) {
  return number1 + number2;
}

// user interface logic 
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

window.alert(add(number1, number2));




