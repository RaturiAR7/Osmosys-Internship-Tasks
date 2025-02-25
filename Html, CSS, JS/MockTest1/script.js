const flatsCount = prompt("Enter number of flats");
let flats = new Array(flatsCount);

let people = [];
const addGuest = () => {
  const name = prompt("Enter name:");
  const visitingFlat = prompt("Enter visitingFlat number:");
  const date = prompt("Enter date:");
  const phoneNumber = prompt("Enter phoneNumber:");
  const person = { name, visitingFlat, date, phoneNumber };
  people.push(person);
  if (flats[visitingFlat]) flats[visitingFlat].push(i);
  else {
    flats[visitingFlat] = [];
    flats[visitingFlat].push(i);
  }
};
for (let i = 0; i < 5; i++) {
  addGuest();
}
console.log(flats);

prompt("Enter flat number:");
fetchGuest(5);
