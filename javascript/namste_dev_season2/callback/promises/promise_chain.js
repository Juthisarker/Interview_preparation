const cart = ["holud", "roshun", "morich"];

function createPromise() {
  const promise = new Promise((resolve, reject) => {
    if (false) {
      const err = new Error("cart is not valid");
      reject(err);
    }
    let orderId = "1234";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
    }
  });

  return promise;
}

function createPromiseTwo() {
   return new Promise((resolve,reject)=>{
    resolve("you promise created successfully");
   })
}

createPromise().then((response)=>{
    console.log(response);
    return response;
})
.then((response2)=>{
    console.log("heehee",response2);
   return createPromiseTwo();
})
.then((response3)=>{
    console.log("heehee433333",response3);
})
.catch((err)=>{
    console.log(err);
})


