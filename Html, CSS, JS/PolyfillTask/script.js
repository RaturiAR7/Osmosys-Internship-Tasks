//////Polyfill for includes function in an array

if (!Array.prototype.myIncludes) {
  console.log("Function does not exists in this browser");

  Array.prototype.myIncludes = function (searchElement) {
    // Iterate through each element in the array
    for (let i = 0; i < this.length; i++) {
      // Check if the current element is equal to the search element
      if (this[i] === searchElement) {
        return true;
      }
    }
    // Element not found
    return false;
  };
} else {
  console.log("Function exists in this browser");
}

// Test cases
const array = [1, 2, 3, 4, 5];

console.log(array.myIncludes(3)); // Output: true
console.log(array.myIncludes(6)); // Output: false
