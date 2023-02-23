onEvent("calculateButton", "click", function () {
  updateScreen();
});

function quadratic(a, b, c) {
  if (
    typeof ~~a != "number" ||
    typeof ~~b != "number" ||
    typeof ~~c != "number" ||
    a == 0
  ) {
    return "Please enter numbers for a (nonzero), b, and c.";
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
        return "The solution to this quadratic is " + solution1 + ".";
      } else {
        return (
          "The solutions to this quadratic are " +
          solution1 +
          " and " +
          solution2 +
          "."
        );
      }
    } else {
      return "The solutions to this quadratic are not real.";
    }
  }
}

function updateScreen() {
  setProperty(
    "solution1",
    "text",
    quadratic(getText("aInput"), getText("bInput"), getText("cInput"))
  );
}
