// /////Pure Function-> A function that return the same value of same parameters
// function add(a, b) {
//   return a + b;
// }
// console.log(add(5, 12));

// /////Impure Function-> A function that returns the different values for same parameters
// //// Or a function that introduces side effects
// function addRandom(num1) {
//   return num1 + Math.random();
// }
// console.log(addRandom(5));

// function addMoreNumbers(num1, num2) {
//   const sum = num1 + num2;
//   previousResult = sum;
//   return sum;
// }
// console.log(addMoreNumbers(5, 8));

// const hobbies = ["sport", "cooking"];
// function printHobbies(h) {
//   hobbies.push("New Hobby"); ///Side effect as it changes hobbies object
//   console.log(h);
// }
// printHobbies(hobbies);

/////Factory Functions->A function that produces another function
function createTaxCalculator(tax) {
  ////Closure-> A closure is a function that has access to its own scope,
  //  the outer function’s variables, and global variables, even after the
  //  outer function has finished executing.
  function calculateTax(amount) {
    return amount * tax;
  }
  return calculateTax;
}
const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);
console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

function add(amt) {
  let amt2 = 5;
  function calculateAnswer(num) {
    return num + amt + amt2;
  }
  return calculateAnswer;
}

const calculateAnswer = add(21);
console.log(calculateAnswer(10));
