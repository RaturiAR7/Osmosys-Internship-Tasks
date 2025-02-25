import greeting, { getMyData as fun } from "./App/getData.js";

const btn = document.querySelector("button");

function sayMyDetails() {
  const myData = fun();
  alert(`My name is ${myData.name} and I am ${myData.age} years old`);
  greeting();
}
console.log(this);
console.log("Hello world!");
btn.addEventListener("click", () => {
  localStorage.setItem("myData", Math.random());
  import("./App/option.js").then(() => {
    console.log("Option Executed");
  });
});

sayMyDetails();
