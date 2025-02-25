let name1 = {
  firstName: "Anshul",
  lastName: "Raturi",
};

let name2 = {
  firstName: "Aman",
  lastName: "Raturi",
};

let printFullName = function printFullName(hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + ", " + state
  );
};

///Call method
///// /In call method we pass arguments individually

printFullName.call(name1, "India", "Uttarakhand");

////Apply method
///In apply method we pass arguments in an array list

printFullName.apply(name2, ["Dehradun", "Uttarakhand"]);

/////Note: Both call and apply method invoke the function immediately
/////Bind method
/////Note: The bind method works just like call method but it returns a reference to the function which can be invoked later on demand

let printMyName = printFullName.bind(name2, "Mumbai", "Maharastra");
console.log(printMyName); ////logs the function details in the console
printMyName();

console.log(this);
