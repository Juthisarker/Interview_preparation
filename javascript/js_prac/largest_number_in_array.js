function largestOfFour(arr) {
    const arrNew = [];
    for(let i = 0; i<4 ; i++){
     const maxResult = Math.max(...arr[i]);

      arrNew.push(maxResult)
    }
       return arrNew;
  }
  
  largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);

  const arr2 = [3,5,2,4,9];
   const sd = arr2.slice(1);
   console.log(sd);