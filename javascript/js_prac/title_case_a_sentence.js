function titleCase(str) {
    const splitString = str.split(" ");
    const updatedTitle = [];
    for (let i = 0; i<splitString.length; i++) {
        updatedTitle[i] = splitString[i][0].toUpperCase() + splitString[i].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");
  //  console.log(updatedTitle.join(" "));
   // return str;
  }
  
 // titleCase("I'm a little tea pot");


  //2nd approach
function titleCase(str) {
    

 console.log(str.toLowerCase().split(" ").map((val)=> val.replace(val.charAt(0), val.charAt(0).toUpperCase())));
  //  console.log(updatedTitle.join(" "));
   // return str;
  }
  
  titleCase("I'm a little tea pot");


//console.log("litle".slice(2));