function findLongestWordLength(str) {
  const outPut = str.split(" ").reduce((acc,cur)=>{
        if(cur.length > acc) acc = cur.length ;
       return acc; 
  },0);
    // console.log(str.split(" "));
    console.log(outPut);
   // return str.length;
  }
  findLongestWordLength("The quick brown fox jumped over the lazy dog");  

