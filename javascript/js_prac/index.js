// function reverString(str){ 
//     return str.split("").reverse() .join("");
  
   
// }
// reverString("hello")

function reverString(str){ 

    let reverseStr = "";
    for(let i = str.length-1 ; i>=0;i--){
        reverseStr += str[i]; 
    }
  
   console.log(reverseStr);
}
reverString("hello")


function factorialize(num) {
    if(num>0){
      let total = 1;
    while(num!=0){
      total = total * num;
      num--;
    }
    }
    return num*num;
  }
  
  factorialize(5);