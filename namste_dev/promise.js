const mypromise = new Promise((resolve, reject) => {
    resolve(10)
});
mypromise.then((result) => {
    console.log(result);
    return result * 2;
}).then((result)=>{
    console.log(result);
    return result * 3;
});


const arr=[1,2,3];
arr.

