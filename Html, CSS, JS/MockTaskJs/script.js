// function main() {
//   const name = "Anshul Raturi";

//   ////Closure
//   function sayMyName() {
//     console.log(name);
//   }
//   sayMyName();
// }
// main();
// function main() {
//   const name = "Anshul Raturi";

//   ////Closure
//   function sayMyName() {
//     console.log(name);
//   }
//   return sayMyName;
// }
// let consoleName = main();

// consoleName();
// consoleName();

// function adder(num) {
//   function add(b) {
//     console.log(num + b);
//   }
//   return add;
// }
// const addTo5 = adder(5);
// addTo5(10);

// A closure is a function that has access to its own scope, the outer function’s variables, and global variables,
// even after the outer function has finished executing.

const myName = document.getElementById("myName");
const btn = document.getElementById("btn");
function makeTextSizer(size) {
  function changeSize() {
    myName.style.fontSize = `${size}px`;
  }
  return changeSize;
}

// const size12 = makeTextSizer(12);
const size70 = makeTextSizer(70);
btn.addEventListener("click", size70);

// Function to validate user input
function validateInput(input) {
  if (!input.trim()) {
    throw new Error("Input cannot be empty!");
  }
  if (isNaN(input)) {
    throw new Error("Input must be a number!");
  }
  return Number(input);
}

try {
  // Read user input using prompt
  let userInput = prompt("Enter a number:");

  // Validate input
  let validNumber = validateInput(userInput);

  console.log("Valid number entered:", validNumber);
} catch (error) {
  console.error("Error:", error.message);
}

// const h3El = document.createElement("h3");

document.addEventListener("DOMContentLoaded", () => {
  const h1 = document.querySelector("h1");
  const btn = document.querySelector("#hideBtn");
  if (!h1 || !btn) return;
  btn.addEventListener("click", () => {
    console.log("clicked");
    h1.classList.toggle("hidden");
  });
});
