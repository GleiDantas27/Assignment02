/*eslint-env browser*/

var a;
var b;
var output;

for (a = 1; a <= 7; a++) {
    output = "";
    for (b = 0; b < a; b++) {
        output += "#";
    }
    console.log(output);
}