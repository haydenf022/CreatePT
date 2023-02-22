onEvent("calculateButton", "click", function () {
  updateQuadratic(
    quadratic(getText("aInput"), getText("bInput"), getText("cInput"))
  );
});

function quadratic(a, b, c) {
  var solution1 =
    (-1 * b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a).toString();
  var solution2 =
    (-1 * b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a).toString();

  if (solution1 || solution2) {
    return (
      "The solutions to this quadratic are " +
      solution1 +
      " and " +
      solution2 +
      "."
    );
  } else {
    return "The solutions to this quadratic are not real.";
  }
}

function updateQuadratic(solutions) {
  setProperty("solution1", "text", solutions);
}
