const prompt = require("prompt-sync")({ sigint: true });

var a = prompt("What is a (nonzero) in this quadratic? ");
var b = prompt("What is b in this quadratic? ");
var c = prompt("What is c in this quadratic? ");

if (
  typeof ~~a != "number" ||
  typeof ~~b != "number" ||
  typeof ~~c != "number" ||
  a == 0
) {
  console.log("Please enter numbers for a (nonzero), b, and c.");
} else {
  console.log(quadratic(Number(a), Number(b), Number(c)));
}

function quadratic(a, b, c) {
  var solution1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
  var solution2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);

  if (solution1 || solution2 || solution1 == 0 || solution2 == 0) {
    if ((solution1 && !solution2) || (solution2 && !solution1)) {
      return "There are infinitely many solutions to this quadratic.";
    }
    if (solution1 == solution2) {
      return `The solution to this quadratic is ${solution1} with a multiplicity of 2.`;
    } else {
      return `The solutions to this quadratic are ${solution1} and ${solution2}`;
    }
  } else {
    return "The solutions to this quadratic are not real.";
  }
}
