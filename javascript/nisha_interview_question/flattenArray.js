

 let arr = [1,2,3,[4,5,6,[7,8,9]]];
 let output = [];
 function flattedArray(arr){
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if(Array.isArray(element)){
    flattedArray(element);
  } else {
    output.push(element);
  }
 }
 return output;
}

 console.log(flattedArray(arr)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]