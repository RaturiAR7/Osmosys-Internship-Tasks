let person = {
  "first name": "John",
  age: 30,
  address: {
    state: "Uttarakhand",
    city: "Dehradun",
  },
};
console.log(person.age);
console.log(person["first name"]);

/////Spread in object
let newPerson = person; ////Would copy a reference to the original object
/////To create a brand new object
newPerson = { ...person }; ////Though nested object would still be a shallow copy
newPerson.address.state = "Jaipur";
console.log(newPerson);
console.log(person);
////To avoid the shallow copy of inner object
newPerson = { ...person, address: { ...person.address } };

////Object assign->Creates a new object like the syntax above with spread operator
const person2 = Object.assign({}, person);
person2.age = 99;
person2.address.state = "Goa";
console.log(person);
console.log(person2); ////Still nested object would be a shallow copy

////Object Destructuring

const { age, ...otherProps } = person;

////Check for a property
if ("name" in person) {
  console.log(person.name);
}
if (person.name !== undefined) {
  console.log(person.name);
}

////This keyword
person.printName = function () {
  console.log(this.age ? this.age : this);
};
person.printName();

//// Problem with this
const { printName } = person;
printName(); ////Now refers to the window object

////Use bind to avoid above problem
const print = printName.bind(person);
print(); ///Now refers to the context it is bound to

/////Call and Apply-> immediately calls the function unlike bind

printName.call(person /*more args in indiviual form*/);
printName.apply(person /*more args in a form of list*/);

////Arrow function difference with this keyword
////Arrow function does not know about this context and refer to global object
let members = {
  teamName: "Blue Rockets",
  people: ["Max", "Manuel"],
  getTeamMembers() {
    this.people.forEach((p) => {
      ////Arrow function binds to outside function
      console.log(this);
      console.log(p + "-" + this.teamName);
    });
  },
};
members.getTeamMembers();
members = {
  teamName: "Blue Rockets",
  people: ["Max", "Manuel"],
  getTeamMembers() {
    this.people.forEach(function (p) {
      ////As browser for each is triggering this, thats why window object is consoled
      console.log(this);
      console.log(p + "-" + this.teamName);
    });
  },
};
members.getTeamMembers();
