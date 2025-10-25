//1..// function x(){
// function y(){
//     console.log("hello y")
// }
// return y;
// }

// var print=x();
// print();

//2..... 
//function callbackExcutor(callback){

//     if(typeof callback ==="function"){
//       callback();
//     }
// }

// function callbackactually(){
//     console.log("Callback function executed");
// }

// callbackExcutor(callbackactually);

// 3.....
//function func(){
//     for(let key in arguments)
//     {
//         console.log(arguments[key]);
//     }
// }
// func(1,'hello',true)

//...4
// function funcss(a,b,c){
// console.log(funcss.length);
// }
// funcss()
///...5
// function parameterarg(...params){
//     console.log(params);
// params.forEach((value,index)=>{
// console.log(value,":",index);
// })
// }
// parameterarg("hello","juthi","hi")
//..6
// const test =()=>{
//     return "hiiiiii biiiiiii"
// }
// test();

function multiple(){
    const a= 4,b=8;
return [a,b];
}
const [x,y]= multiple();
//console.log([x,y]);

function multipleObject(){
    const a=23,b=90;
    return {a,b}
}
const {a,b}=multipleObject();
//console.log({a,b});

function  defaultvlue(num=1,num2=2,sum=num+num2,string="hello"){
    console.log(num,num2,sum,string);
}
defaultvlue();
defaultvlue(4,"hola");