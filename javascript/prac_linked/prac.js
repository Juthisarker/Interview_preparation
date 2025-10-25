// var a = ['dog', 'cat', 'hen'];
// a[100] = 'fox';
// console.log(a.length);

const arr = [34, 5, 89, 6, 7];

 const result = arr.reduce((acc, cur)=>{
     if(acc>cur) acc = cur ;

     return acc;
 },100);

// console.log(result);

 const user = [
     {firstName : "juthi", lastName : "sarker", age :26},
     {firstName : "tanu", lastName : "das", age :25},
     {firstName : "aka", lastName : "areh", age :28},
     {firstName : "catty", lastName : "meaw", age :26},
 ];
 const items = ['a','b','c','a','b','b','c','d'];
 const resulttwo = items.reduce((acc, cur)=>{
        if(acc[cur]){
          acc[cur] = ++acc[cur];
        }
        else {
          acc[cur] = 1; 
        }
        return acc;
 },{});

// console.log(resulttwo);


 const objectt = {a : 1, d: 10, c:4};

 const resultThree = Object.keys(objectt).sort().reduce((acc, cur)=>{
       acc[cur] = objectt[cur];

       return acc;
 },{});
 //console.log(resultThree);

const buff = Buffer.from("hey");
//console.log(buff);

// 1
// 2 3
// 4 5 6
// 7 8 9

function piramid(){
  let string = "";
  let count = 1;
  // External loop
  for (let i = 1; i <= 4; i++) {
    // Internal loop
    for (let j = 1; j <= i; j++) {
      string += count;
      count++;
    }
    string += "\n";
  }
  console.log(string);
}
piramid();