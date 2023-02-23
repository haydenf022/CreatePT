const prompt = require("prompt-sync")({ sigint: true });

console.log("What would you like to do today?");
console.log("1. Quadratic Formula Calculator");
console.log("2. Derrivative Calculator");
console.log("3. Integration Calculator");
chooseApp(prompt("Enter 1, 2, or 3. "));

function chooseApp(funcName) {
  if (funcName == 1) {
    var a = prompt("What is a (nonzero) in this quadratic? ");
    var b = prompt("What is b in this quadratic? ");
    var c = prompt("What is c in this quadratic? ");
    console.log(quadratic(a, b, c));
  }
}

function quadratic(a, b, c) {
  if (
    typeof ~~a != "number" ||
    typeof ~~b != "number" ||
    typeof ~~c != "number" ||
    a == 0
  ) {
    return "Please enter numbers for A (nonzero), B, and C.";
  } else {
    var solution1 =
      Math.round(
        ((-1 * b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a)) * 100
      ) / 100;
    var solution2 =
      Math.round(
        ((-1 * b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a)) * 100
      ) / 100;

    if (solution1 || solution2 || solution1 == 0 || solution2 == 0) {
      if ((solution1 && !solution2) || (solution2 && !solution1)) {
        return "There are infinitely many solutions to this quadratic.";
      }
      if (solution1 == solution2) {
        return `The solution to this quadratic is ${solution1}.`;
      } else {
        return `The solutions to this quadratic are ${solution1} and ${solution2}.`;
      }
    } else {
      return "The solutions to this quadratic are not real or you did not enter numbers for a, b, and c.";
    }
  }
}
