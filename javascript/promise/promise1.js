let promise1 = new Promise((resolve) => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((run) => run.json())
    .then((data) => resolve(data));
});

let promise2 = new Promise((resolve) => {
  fetch("https://jsonplacholder.typicode.com/todos")
    .then((run) => run.json())
    .then((data) => resolve(data));
});

Promise.all([promise1, promise2])
  .then((promiseAll) => {
    console.log("promiseAll", promiseAll);
  })
  .catch((err) => {
    console.log("error", err);
  });

// Promise.race([promise1,promise2]).then((winner)=>{
//     console.log("winner",winner);
// })
// .catch((err)=>{
//     console.log("error",err);
// })
