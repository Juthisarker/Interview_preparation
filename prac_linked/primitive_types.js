let num1 = 10, num2 = 20;
[num1, num2] = [num2, num1];


////
function randomNumberGenerator(rangeStart, rangeEnd) {
     return rangeStart + Math.round(Math.random() * (rangeStart - rangeEnd));
}

//console.log(randomNumberGenerator(10,50));

//3
// let strr = "hello";
// let newString = "";
//  for(let i = strr.length -1 ; i>= 0 ; i--) {
//     newString += strr[i];
    
//  }
//  console.log(newString);

function getTheGap(str) {
    if(!str.includes('X')) return -1;

    const firstIndex = str.indexOf('X');
    const lastIndex = str.lastIndexOf('X');

    return firstIndex === lastIndex ? -1 : lastIndex - firstIndex;

    
}

console.log(getTheGap('XeroX'));   



