/////////Arrays
const numbers = [1, "Anshul", 3];
console.log(numbers);

const moreNumbers = new Array(5, 2);
// const moreNumbers = Array(5, 2);
console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

// convert an iterable to an array
const yetMoreNumbers = Array.from("hi!");
console.log(yetMoreNumbers);

////Multi Dimensional
const analyticData = [
  [1, 2, 3],
  [-5, 2, 3, 5],
];

for (const data of analyticData) {
  for (const dataPoint of data) {
    console.log(dataPoint);
  }
}
////Push and remove elements
const hobbies = ["sports", "gaming"];
hobbies.push("Beatboxing");
hobbies.unshift("coding"); /////Push in front
const poppedValue = hobbies.pop(); /////remove last element
const shiftedValue = hobbies.shift(); ////Remove first element
console.log(shiftedValue);

hobbies[1] = "videography";
hobbies[10] = "Chilling"; ////It works as well

////Splice Method
///Adding something in between
hobbies.splice(1, 0, "Good Food"); ////Does not delete as 0
console.log(hobbies);

const removedElements = hobbies.splice(1, 3, "Dancing");
console.log(hobbies);
console.log(removedElements);
// const removedElements = hobbies.splice(-1, 3, "Dancing"); ///Start from last

/////Slice method
const testResults = [1, 5.3, 1.5, 10, -10, 10];
///Arrays are reference values
const newArray = testResults.slice(); /////Returns a brand new array
////Slice can be used to return a range of array
const shortArray = testResults.slice(0, 2); ///start 0 and end 2 , negative values for from end
console.log(shortArray);

////Concat to join two arrays and returns a brand new array
const storeResult = testResults.concat(hobbies);
console.log(storeResult);

////IndexOf and lastIndexOf
console.log(testResults.indexOf(10));
console.log(testResults.indexOf(10, 4)); ///Start searching from index 4

////Find to find refernces
const personData = [{ name: "Max" }, { name: "Manuel" }];

const Manuel = personData.find((person, idx, persons) => {
  ////to find the object
  return person.name === "Manuel";
});
console.log(Manuel);
// const Manuel = personData.findIndex((person, idx, persons) => {
//   ////to find the index
//   return person.name === "Manuel";
// });
// console.log(Manuel);

////Includes->an element? ///Does not find references
console.log(testResults.includes(10));

//////ForEach alternative to for of loop

// const prices = [10.99, 21, 453, 121, 34];
// const tax = 0.19;
// const taxAdjusted = [];
// prices.forEach((price, idx, prices) => {
//   const taxObj = { index: idx, taxAdjPrice: price + tax };
//   taxAdjusted.push(taxObj);
// });
// console.log(taxAdjusted);

////Map method

const prices = [10.99, 21, 453, 121, 34];
const tax = 0.19;
const taxAdjusted = prices.map((price, idx, prices) => {
  const taxObj = { index: idx, taxAdjPrice: price + tax };
  return taxObj;
});
console.log(taxAdjusted);

////Sort
// const sortedPrices = prices.sort(); ///Converts the prices to string array ////Only first character is compared
// console.log(sortedPrices);
///To actual sort an array of numbers

const sortedPrices = prices.sort((a, b) => {
  if (a > b) return 1; ////Swap position if need to swap
  else if (a === b) return 0;
  else return -1;
});
console.log(sortedPrices);
///Reverse
console.log(sortedPrices.reverse());

//////FILTER METHOD
////Keep prices less than 40
const filteredArray = prices.filter((price, idx, prices) => {
  return price < 40;
  //   return price < 40 ? true : false;
});
console.log(filteredArray);

////Reduce method->reduces array to one value
const sum = prices.reduce((previousValue, currentValue, currIndex) => {
  return previousValue + currentValue;
}, 0);
console.log(sum);

/////Split->splits string into an array
const data = "new york;10.99;2000";
const transformedData = data.split(";");
console.log(transformedData);
////Join->array string into one string
const nameFragments = ["Max", "Raturi"];
const fullName = nameFragments.join(" ");
console.log(fullName);

///////Spread operator
const copiedNameFragments = [...nameFragments];
console.log(copiedNameFragments);

console.log(Math.min(...prices));

const persons = [
  { name: "John", age: 20 },
  { name: "Jane", age: 21 },
];
const copiedPersons = [
  ...persons.map((person) => ({ name: person.name, age: person.age })), ////Mapping and return a new object to avoid shallow copy
];
copiedPersons[0].age = 100;

console.log(persons);
console.log(copiedPersons);

/////Array Destructuring
const nameData = ["Max", "Raturi", "30", "Male"];
const [firstName, lastName, ...otherInfo] = nameData;
console.log(firstName + " " + lastName + " " + otherInfo);
