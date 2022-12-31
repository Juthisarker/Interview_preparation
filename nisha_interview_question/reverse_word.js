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