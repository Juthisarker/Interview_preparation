// function confirmEnding(str, target) {
//     const stroutput = str[str.length-1];
//     if(stroutput===target) return true;
//    // console.log(stroutput);
//   }
  
//   confirmEnding("Bastian", "n");

function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    console.log(str.length);
    console.log(target.length);
     console.log(str.slice(str.length - target.length));
    return str.slice(str.length - target.length) === target;
  }
  
 // confirmEnding("Congratulation", "on");

  module.exports = confirmEnding;