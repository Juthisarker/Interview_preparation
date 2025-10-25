const cart = ["holud", " jira", " morich"];
///producer code
function createPromise(cart) {

    const promise = new Promise(function(resolve,reject){

        if(!validateCart(cart)){
          const err = new Error("cart is not valid");
          reject(err);
        }
        const orderId = "12344";
        if(orderId) {
            setTimeout(() => {
                resolve(orderId);
            }, 5000);
          
        }
    })
    return promise;
}

function validateCart(cart) {
     return false;
}


//consumer code 
const promise  = createPromise(cart);
promise.then((res)=>{
    console.log(res);
})
.catch(function (err){
    console.log(err.message);
});