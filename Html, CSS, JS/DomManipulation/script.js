/////Selecting Child
const ul = document.querySelector("ul");
ul.children[1].setAttribute("style", "color:red");

ul.lastChild;

////Selecting parent or ancestor
const liFirst = document.querySelector("li");
liFirst.parentElement.setAttribute("style", "background-color:pink");

liFirst.closest("div").setAttribute("style", "border:2px solid red");

/////Sibling
ul.previousElementSibling;
ul.nextElementSibling.setAttribute(
  "style",
  "background-color:black;color:white"
);

/////Adding Elements
// ul.innerHTML = "<li>Hello Ji !</li>";   //////Removes existing lists
// ul.innerHTML = ul.innerHTML + "<li>Hello Ji !</li>"; /////ReRenders the whole list
// ul.insertAdjacentHTML("beforeend", "<li>Hello Ji !</li>"); /////Does not rerenders whole list

////Making an element first
// const newLi = document.createElement("li");
// newLi.textContent = "Kaise hain aap";
// ul.appendChild(newLi);

////Making element and appending in first place
// const newLi = document.createElement("li");
// newLi.textContent = "Kaise hain aap";
// ul.prepend(newLi);

/////Second last position
// const newLi = document.createElement("li");
// newLi.textContent = "Kaise hain aap";
// ul.lastElementChild.before(newLi);
// ul.lastElementChild.after(newLi);

////Any position
// const secondLi = ul.children[1];
// const newLi = document.createElement("li");
// newLi.textContent = "I am the best";
// secondLi.insertAdjacentElement("afterend", newLi);

////Clone node
// const newUl = ul.cloneNode(true);
// document.body.appendChild(newUl);

////Get Elements By something always gives live lists Eg-> GetElementByClassName
////QuerySelector always gives static lists Eg-> querySelectorAll

////Removing Elements
// ul.remove(); ////Removes whole ul -> not to use for internet explorer
// ul.parentElement.removeChild(ul); ////Removes whole ul
ul.removeChild(ul.querySelector("li")); /////Removes first child of ul (li)

////Extra Dom Manipulation

///Data Set in HTML elements
const li1 = document.querySelector("ol").children[0];
console.log(li1.dataset);

///Scroll to bottom
const btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   scrollBy({ top: 1200, behavior: "smooth" });
// });
////Scroll to view an element
btn.addEventListener("click", () => {
  const h1 = document.querySelector("h1");
  h1.scrollIntoView({ behavior: "smooth" });
});

/////Create script dynamically
// const someScript = document.createElement("script");
// someScript.textContent = 'alert("Hello there");';
// document.head.append(someScript);

/////Adding dynamic script on click event
const someScript = document.createElement("script");
document.getElementById("scriptLoader").addEventListener("click", () => {
  someScript.src = "/dynamicScript.js";
  document.head.append(someScript);
});

////Set Timeout
// setTimeout(() => {
//   alert("Time passed");
// }, 3000);

///Set Interval
// const intervalId = setInterval(() => {
//   console.log("Hello");
// }, 2000);
// btn.addEventListener("click", () => clearInterval(intervalId));

//////Location
// location.href = "http://instagram.com";
// history.back();
//location.host;
// location.replace(""); /////Cant go back
// location.assign("");
// location.host;
// location.origin;
///location.pathname
// history

////Navigator
// navigator.userAgent;
navigator.clipboard;
// console.log(
//   navigator.geolocation.getCurrentPosition((data) => console.log(data))
// );
////Date
// const date = new Date();
const date = new Date("07/11/19");
console.log(date);

////Error object
const customError = new Error("Something went wrong");
customError.code = 404;
