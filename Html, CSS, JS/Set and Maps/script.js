////////SETS

const ids = new Set([1, 2, 3, "Hi"]);
ids.add(10);
console.log(ids.has(10));
ids.delete(2);

for (const entry of ids.entries()) {
  console.log(entry);
}

///Maps

const person1 = { name: "Max" };
const person2 = { name: "Manuel" };

// const personData = new Map([[person1, [{ date: "yesterday", price: 10 }]]]);
personData.set(person2, [{ date: "two weeks ago", price: 100 }]);
console.log(personData.get(person1));
console.log(personData.get(person2));

for (const [entry] of personData.entries()) {
  console.log(entry[0] + " -> " + entry[1]);
}

//////Weak sets-> Weak set allows garbage collection if data not used

let person = { name: "Max" };
const persons = new WeakSet();
persons.add(person);

// person=null;

/////Weak Maps-> Weak map allows garbage collection if data not used
const personData = new WeakMap();
personData.set(person, "Extra Info");
person = null;
