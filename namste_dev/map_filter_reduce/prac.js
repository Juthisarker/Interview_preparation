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

// const rt= array.map((x)=>{
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
//   });
// console.log(hello);