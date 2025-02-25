/////COOKIES->Sent with http request

let storeBtn = document.getElementById("store-btn");
let retrBtn = document.getElementById("retrieve-btn");

const userId = "u123";
const user = {
  name: "Max",
  age: 30,
  hobbies: ["sport", "cooking"],
};

storeBtn.addEventListener("click", () => {
  ////Add new entry to cookie
  ////Cookie if no expiration date then its browser choice to delete

  document.cookie = `uid=${userId}`;
  document.cookie = `user=${JSON.stringify(user)}; max-age=5`;
});
retrBtn.addEventListener("click", () => {
  cookieData = document.cookie.split(";");
  const data = cookieData.map((i) => {
    return i.trim();
  });
  console.log(data[0].split("=")[1]); /////User Value
  console.log(cookieData);
});
