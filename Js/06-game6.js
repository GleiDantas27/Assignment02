/*eslint-env browser*/

var a, output;

for (a = 0; a < 16; a++) {
    output = String(a);
    output += (a % 2) ? " is odd" : " is even";
    console.log(output);
}