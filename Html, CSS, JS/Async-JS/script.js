// const btn = document.querySelector("button");
//////Async Code and Event Loop
// ///Callback hell
// function trackUserLocation() {
//   navigator.geolocation.getCurrentPosition(
//     (posData) => {
//       setTimeout(() => {
//         console.log(posData);
//       }, 5000);
//     },
//     (error) => {
//       setTimeout(() => {
//         console.log(error);
//       }, 2000);
//     }
//   );
//   console.log("Getting Position");
// }

// btn.addEventListener("click", trackUserLocation);

// ////////Promises///////
// const getPosition = (opts) => {
//   const promise = new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(
//       (success) => {
//         resolve(success);
//       },
//       (error) => {
//         reject(error);
//       },
//       opts
//     );
//   });
//   return promise;
// };

// const setTimer = (duration) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Done!");
//     }, duration);
//   });
//   return promise;
// };

// function trackUserLocation() {
//   getPosition().then((posData) => {
//     console.log(posData);
//   });
//   setTimer(2000).then((data) => {
//     console.log(data, error);
//   });
//   console.log("Getting Position");
// }

// btn.addEventListener("click", trackUserLocation);

const promiseOne = new Promise(function (resolve, reject) {
  /////Do an async task
  setTimeout(() => {
    console.log("Async task in complete");
    resolve("Promise consumed");
  }, 1000);
});

promiseOne.then(function (message) {
  console.log(message);
});

// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Async task2");
//     resolve("Async Task2 consumed");
//   }, 1000);
// }).then((message) => {
//   console.log(message);
// });

const promise3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "Anshul", email: "anshul@anshul" });
  }, 1000);
});

promise3.then((data) => {
  console.log(data);
});

// const promise4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: "Anshul", message: "Promise 4 consumed" });
//     } else {
//       reject("Error:Something went wrong");
//     }
//   }, 1000);
// });

// promise4
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("The promise is completed");
//   });

// const promise5 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: "JAVASCRIPT", message: "Promise 5 consumed" });
//     } else {
//       reject("Error:JS went wrong");
//     }
//   }, 1000);
// });

// async function consumePromise5() {
//   try {
//     const response = await promise5;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumePromise5();

// ////Async Await
// // async function getAllUsers() {
// //   try {
// //     const response = await fetch("https://jsonplaceholder.typicode.com/users");
// //     const data = await response.json();
// //     console.log(data);
// //   } catch (error) {
// //     console.log(error);
// //   }
// // }
// // getAllUsers();

/////Doing the above code in .then format
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
