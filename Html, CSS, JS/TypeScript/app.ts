const num1Input = document.getElementById("num1") as HTMLInputElement;
const num2Input = document.getElementById("num2") as HTMLInputElement;
const btn = document.querySelector("button") as HTMLButtonElement;

function add(a: number, b: number) {
  return a + b;
}
function printResult(result: number): void {
  console.log(result);
}
// const result = add("5", "3");
// const result: number = add(5, 3);
// let isDone: Boolean = false;
// printResult(result);

let results: { res: number; print: () => void }[] = [];

btn.addEventListener("click", () => {
  const num1: number = Number(num1Input?.value);
  const num2: number = Number(num2Input?.value);
  const result = add(num1, num2);
  const resultContainer = {
    res: result,
    print() {
      console.log(this.res);
    },
  };
  results.push(resultContainer);
  printResult(results);
});
