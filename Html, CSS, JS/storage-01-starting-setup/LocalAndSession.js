//////////// Local And Session Storage

const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

const userId = "u123";
const user = {
  name: "Max",
  age: 30,
  hobbies: ["sport", "cooking"],
};

storeBtn.addEventListener("click", () => {
  /////Local Storage
  localStorage.setItem("uid", userId);
  localStorage.setItem("user", JSON.stringify(user));
  ////Session storage
  sessionStorage.setItem("uid", userId);
  sessionStorage.setItem("user", JSON.stringify(user));
});
retrBtn.addEventListener("click", () => {
  /////Local Storage->Data persists until manual deletion or browser out of space
  //   const extractedId = localStorage.getItem("uid");
  //   const extractedUser = localStorage.getItem("user");
  //   if (extractedId && extractedUser) {
  //     console.log("Extracted Id: " + extractedId);
  //     console.log("Extracted User: " + extractedUser);
  //   } else {
  //     console.log("Could not extract");
  //   }
  /////Session storage->Persist for one session-> Gets deleted on change of tabs or close of browser
  const extractedId = sessionStorage.getItem("uid");
  const extractedUser = sessionStorage.getItem("user");
  if (extractedId && extractedUser) {
    console.log("Extracted Id: " + extractedId);
    console.log("Extracted User: " + extractedUser);
  } else {
    console.log("Could not extract");
  }
});
