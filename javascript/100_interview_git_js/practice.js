function asyncSuccess(){
    return new Promise((resolve, reject)=>{
        resolve("success");
    });
}
function asyncFailure(){
    return new Promise((resolve, reject)=>{
        reject("failure");
    });
}

const successResult = asyncSuccess();
const rejectResult =  asyncFailure();

successResult.then((res)=>{
    console.log(res,'surrr1');
},
(hello)=>{
    console.log(hello,"11222");
}
);

rejectResult.then((res2)=>{
    console.log(res2);
},
(hello)=>{
    console.log(hello,'yiuiuiui');
}
);