/*eslint-env browser*/

var num = parseInt(window.prompt("Enter a Number:"));
var i;

for (i = num; i >= 0; i--) {
    console.log(i);
    window.document.write(String(i) + "<br>")

}