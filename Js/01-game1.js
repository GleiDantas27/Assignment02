/*eslint-env browser*/
var number1, number2, output;

number1 = parseInt(window.prompt("Enter the first number:"));
number2 = parseInt(window.prompt("Enter the second number:"));

output = number1 > number2 ? number1 : number2;
window.document.write(output);