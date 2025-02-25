export default function greeting() {
  alert("Hello world!");
}

console.log(this);
export const getMyData = () => {
  const data = {};
  data.name = prompt("Please enter your name:");
  data.age = prompt("Please enter your age:");
  return data;
};
