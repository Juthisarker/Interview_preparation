// async function asyncAwaitFunction () {
//     try {
//         console.log("executes while normally runs");
//         await promiseReturingFunction();
//     } catch (error) {
//         console.log("error occured",error );
//     }
// }
function asyncFunc1() {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve("Resolved async1");
      }, 2000)
    );
  }
  function asyncFunc2() {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve("Resolved async2");
      }, 3000)
    );
  }
  function asyncFunc3() {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        reject("Rejected async3");
      }, 1000)
    );
  }
const asyncArr = [asyncFunc1, asyncFunc2, asyncFunc3];
const promiseArr = asyncArr.map((async) => async());
finalResolution = Promise.all(promiseArr);
finalResolution
  .then((output) => {
    for (let data of output) {
      console.log(data);
    }
  })
  .catch((err) => console.log(err));