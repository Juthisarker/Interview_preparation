const input = "  I love        javascript";
//const input = "I love javascript";
/// I evol tpircsavaj 
function reverseString(data) {
  const arrayInput = data.split(" ");
     const output = arrayInput.map(d => {
      //   console.log(d.split("").reverse().join(""));
         return d.split("").reverse().join("");
     })

     return output.join(" ");
}

//console.log(reverseString(input));


function reverseeeee(data) {
  return data.trim().split(/\s+/).reverse().join(" ");
}
console.log(reverseeeee(input));