const input = "I love javascript";
/// I evol tpircsavaj 
function reverseString(data) {
  const arrayInput = data.split(" ");
     const output = arrayInput.map(d => {
        return d.split("").reverse().join("");
     })

     return output.join(" ");
}

console.log(reverseString(input));


function reverseeeee(data) {
    const arr = data.split(" ");
    const out = arr.map((d)=>{
      return d.split("").reverse().join("");
    });
    return out.join(" ");
}
console.log(reverseeeee(input));