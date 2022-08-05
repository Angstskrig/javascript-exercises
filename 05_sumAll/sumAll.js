const sumAll = function (num1, num2) {
  if (num1 > num2) {
    let num3 = num1;
    num1 = num2;
    num2 = num3;
  }

  if (num1 < 1 || num2 < 1) {
    return "ERROR";
  }

  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "ERROR";
  }

  let total = num1;
  for (let i = num1; i < num2; i++) {
    total += i + 1;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
