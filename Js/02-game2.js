/*eslint-env browser*/

var coinFlip = Math.floor(Math.random() * 100);
var choice = window.prompt("Select Heads or Tails Bro:");
var result = coinFlip < 50 ? "Heads" : "Tails";
var output;

switch(choice.toLowerCase()) {
    case "tails" :
    case "tail"  :
    case "t"  :
        choice = "tails";
        break;
    case "heads" :
    case "head"  :
    case "h"   :
        choice = "heads";
        break;
}

output = "The flip was " + result;
output += "and your pick was" + choice;
output += (choice === result) ? "...you win!" : "... you loose!";

window.alert(output);