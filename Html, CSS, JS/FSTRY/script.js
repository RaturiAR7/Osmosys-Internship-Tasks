const fs = require("fs");

const A = (filePath, callback) => {
  return fs.readFile(filePath, (error, result) => {
    if (true) {
      callback(null, null);
    }
    // callback(null, result);
  });
};

const B = () => {
  // a callback function attached
  A("./file.md", (error, result) => {
    if (result) {
      for (i = 0; i < result.length; i++) {
        console.log(i);
      }
    }
  });
  console.log("Result is not yet back from function A");
};

B();
