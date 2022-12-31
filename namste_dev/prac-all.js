// let obj1 = {
//     firstName : "juthi sarker",
//     lastName : "aka",
//     district : "dhaka"
// }

// let obj2 = {
//     firstName : "kamal",
//     lastName : "hossain",
//     district : "madaripur"
// }

// let printInfo = function (hometown){
//     console.log(this.firstName+" "+this.lastName+" "+hometown);
// }

// printInfo.call(obj1,"madarpur");
// printInfo.apply(obj2,["barisal"]);

// let printMyInfo = printInfo.bind(obj1,"madarpur");
// printMyInfo();
// getName();

// console.log(x);

// var x =10;

// function getName(){
// console.log("hello juthi");
// }
// var d =10 ;
// function a(){
   
//   return  function c(){

//     }
// }
// a();
// console.log(d);

function printset(){

    for(var i=1;i<=10;i++){
        function close(i){
           setTimeout(() => {
            console.log(i);
           }, i*1000);
    }
    close(i);
}
}
printset()
// function printSet(){
// for(let i =1;i<=10 ;i++){
//     setTimeout(() => {
//         console.log(i);
//     },i*1000);
// }};

// printSet();
const user = [
    {firstName : "juthi", lastName : "sarker", age :26},
    {firstName : "tanu", lastName : "das", age :25},
    {firstName : "aka", lastName : "areh", age :28},
    {firstName : "catty", lastName : "meaw", age :26},
];

const output = user.reduce((acc,cur)=>{
   if(acc[cur.age]){
    acc[cur.age] =++ acc[cur.age]
   } else{
    acc[cur.age] = 1;
   }
   return acc;
},{});
 
// const arr2 = [1,2,3];

// const obj2 = {a:1, c:0, b:3};

// const outSort = Object.keys(obj2).sort().reduce((acc,cur)=>{
//     //   acc[cur] = obj2[cur];
//     console.log(obj2[cur]);
//      //  return acc ; 
// },{});

// const output2 = arr2.reduce((acc,cur)=>{
//      let obj = {};
//      obj.value = cur;
//      acc.push(obj);
//      return acc;
// },[]);
//console.log(outSort);



// onst arr = ['fruts', 'pineapple','mango'];

// const arrOutput = arr.sort();

// console.log(arrOutput);

// const obj ={
//     a: 1,
//     c: 2,
//     b: 3
// }
 
// const arrOutput2 = Object.keys(obj).sort(); 
// const arry = arrOutput2.reduce((acc,cur)=>{
//      acc[cur]=obj[cur];
//      return acc;
// },{});
// console.log(arry);