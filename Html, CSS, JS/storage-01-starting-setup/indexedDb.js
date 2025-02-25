let storeBtn = document.getElementById("store-btn");
let retrBtn = document.getElementById("retrieve-btn");
let db;

const dbRequest = indexedDB.open("StorageDummy", 1);

dbRequest.onsuccess = function (event) {
  db = event.target.result;
  console.log("Hello World!");
};

dbRequest.onupgradeneeded = function (event) {
  db = event.target.result;
  const objStore = db.createObjectStore("products", { keyPath: "id" });
};
dbRequest.onerror = function (e) {};

const userId = "u123";
const user = {
  name: "Max",
  age: 30,
  hobbies: ["sport", "cooking"],
};
fg

storeBtn.addEventListener("click", () => {
  if (!db) {
    return;
  }
  const productsStore = db
    .transaction("products", "readwrite")
    .objectStore("products");
  productsStore.add({
    id: "p5",
    title: "Blanket",
    price: "30000",
    tags: ["Luxuary", "Lifestyle"],
  });
});
retrBtn.addEventListener("click", () => {
  const productsStore = db
    .transaction("products", "readwrite")
    .objectStore("products");
  const request = productsStore.get("p5");

  request.onsuccess = function () {
    console.log(request.result);
  };
});
