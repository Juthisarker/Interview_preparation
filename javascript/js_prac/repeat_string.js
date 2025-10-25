function repeatString(str, num) {
  let accumulator = "";
  for(let i = 0; i<num; i++) {
    accumulator+= str ;
  }
   return accumulator;
}

repeatString("abc", 3)