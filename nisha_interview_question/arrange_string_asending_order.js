
const str = "React is a library";

//output str = "a is React library";

function asendingStringArrange(data){

const arrayOfStrings = data.split(" ");
arrayOfStrings.sort((a,b)=>{
    return  a.length - b.length;
  });

  return arrayOfStrings.join(" ");

}
console.log(asendingStringArrange(str));

// good article
///https://www.javascripttutorial.net/javascript-array-sort/