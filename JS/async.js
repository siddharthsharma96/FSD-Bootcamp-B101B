setTimeout(() => {
  console.log("Inside SetTimeOut");
}, 0);

console.log("Learning");
console.log("Asynchronous programming");

// callback hell
// setTimeout(() => {
//   console.log("Step1");
//   setTimeout(() => {
//     console.log("Step 2");
//     setTimeout(() => {
//       console.log("final step");
//       setTimeout(() => {
//         console.log("final step");
//         setTimeout(() => {
//           console.log("final step");
//           setTimeout(() => {
//             console.log("final step");
//           }, 2000);
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);

// Promises
// 1.Pending
// 2. Resolved
// ?3.rejected

const myNewPromise = new Promise((resolve, reject) => {
  let succes = false;
  if (succes) {
    resolve("Hi I am giving Party");
  } else {
    reject("I am not giving any type of party");
  }
});

// 1.then and .catch
myNewPromise
  .then((ererer) => {
    console.log(ererer);
  })
  .catch((erfgfgffr) => {
    console.log(erfgfgffr);
  });

// 2Async and await

const handlingPromise = async () => {
  try {
    let msg = await myNewPromise;
    console.log(msg);
  } catch (er) {
    console.log(er);
  }
};
handlingPromise();

function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const i = counter();
i();
i();
