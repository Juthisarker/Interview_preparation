const arr = [5,2,3,4,7];

const newArr1 =  arr.map(element=> element.toString(2)); 
const newArr2 =  arr.filter(element=> element<=4);
//console.log(newArr2);

const output = arr.reduce((acc, cur)=>{
  acc +=cur;
  return acc;
},0);

const output2 = arr.reduce((acc, cur)=>{
    if(cur>acc) acc =cur
    return acc;
  },0);
//console.log(output2);
const user = [
    {firstName : "juthi", lastName : "sarker", age :26},
    {firstName : "tanu", lastName : "das", age :25},
    {firstName : "aka", lastName : "areh", age :28},
    {firstName : "catty", lastName : "meaw", age :26},
];

// const arrayMap = user.map((x)=>x.firstName);

// const arrayMap2 = user.reduce((acc,cur)=>{
//  if(acc[cur.age]){
//     acc[cur.age] =++acc[cur.age];
//  }
//  else {
//     acc[cur.age] = 1;
//  }
//  return acc;
// },{});
// console.log(arrayMap2);
const arrrow =(a,b)=> a+b;
//console.log(arrrow(2,3));
const array3 = user.reduce((acc, cur)=>{
    if(cur.age>25){
        acc.push(cur.firstName);
    }
  return acc;
},[]);
//console.log(array3);
const objr = [1,2,3].reduce(function(acc, cur, i) {
    let ob={}
     ob['value'] = cur;
   //  console.log(ob);
    acc.push(ob);
     return acc;
   }, []);
  //console.log(objr);

const users = ['sam','juthi','aka','tanu'];

const out1 = users.map((item)=>item.toUpperCase());
//console.log(out1);

const employList = [
    {id: 100, name : 'juthi', profile: 'Senior developer'},
    {id: 101, name : 'aka', profile: 'junior developer'},
    {id: 102, name : 'pronab', profile: 'test developer'},
    {id: 103, name : 'mithila', profile: 'cool developer'},
];

const out = employList.filter((item)=>item.profile ==='Senior developer');
console.log(out);