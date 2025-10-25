function frankenSplice(arr1, arr2, n) {
    // const arrSlice = arr2.slice(0,1);
    // const result = [];
    // console.log(arr2.slice(0));
    let localArr = arr2.slice();
    localArr.splice(n, 0, ...arr1);
  console.log(localArr);
   // console.log(arrSlice);
   // return arr2;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);