const arr = [5, 10, 15, 20, 3, 2, 6];

function doubleMake(x) {
    return x * 2;
}
function tripleMake(x) {
    return x * 3;
}
function binaryMake(x) {
    return x.toString(2);
}

const output = arr.map(binaryMake);
const output2 = arr.map((x) => {
    return x * 5;
});
const output3 = arr.map((x) => x * 5);

//console.log(output);

const array= [1,2,3];

//  const rt= array.map((x)=>{
//     Object.assign({}, x);
// });

// const out = [1,2,3].reduce((a, v) => ({ ...a, [v]: v}), {}) 
let t=[];
var objr = [1,2,3].reduce(function(acc, cur, i) {
   let ob={}
    ob['value'] = cur;
  //  console.log(ob);
   acc.push(ob);
    return acc;
  }, []);
 console.log(objr);
// let objec = {};
//   const hello = [1,2,3].map((x)=>{
   
//     objec['value'] = x;
// let array1 = ['I', 'am', 'feeling', 'really', 'happy'];

// let newArray = array1.splice(3, 2);
// console.log("array1",array1);

// const arr1 = [2, 4, 5, 1, 7, 5, 2, 1];
// // Only change code below this line
// arr1.splice(1,4);
// // Only change code above this line
// console.log(arr1);

// const arr3= [5,1,3,2,6];
// const val=arr3.map((i)=>i*2);
const val2 = arr3.filter((i)=>i%2===0);
const val3 = arr3.filter((i)=>i>4);
console.log(val3);


const arr14= [5,1,3,2,6];
// function findMax(){
//     let max = 0 ; 
//     for(let i=0;i<arr14.length;i++)
//     {
//         if(arr14[i]>max)
//         {
//             max= arr14[i];
//         }
//     }
// }

const arr15 = arr14.reduce((acc,curr)=>{
     if(curr>acc)
     {
        acc=curr;
     }
     return acc;
},0);
console.log(arr15);


const user = [
    {firestName  : "Juthi sarker aka",lastName : "aka aka", age : 28},
    {firestName  : "gdfgg",lastName : "kamal", age : 58},
    {firestName  : "dgdfgdgf",lastName : "dhamal", age : 38},
    {firestName  : "helloooo",lastName : "dhamal", age : 38},
];

const outpu3t = user.map((x)=>x.firestName);
console.log(outpu3t);
const output4 = user.reduce((acc,curr)=>{
    if(acc[curr.age])
    {
        acc[curr.age] = ++acc[curr.age];
    }
    else{
        acc[curr.age] = 1;
    }
    return acc;
},{});

console.log(output4);

//   });
// console.log(hello);