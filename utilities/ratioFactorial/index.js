const factorialOfNumber = require("../factorial/index");
const ratioOfTwoNumber = require("../ratio/index");

const ratioAndFactorial = (num1, num2, num3) => {
  const ratio = ratioOfTwoNumber(num1, num2);
  const factorial = factorialOfNumber(num3);
  return { ratio, factorial };
};
module.exports = ratioAndFactorial;
