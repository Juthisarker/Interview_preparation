const items = ['a','b','c','a','b','b','c','d'];
   // output {a:2, b:3, c:2, d:1}

const output = items.reduce((acc, cur)=>{
        if(acc[cur])acc[cur] = ++acc[cur]; 
        else
            acc[cur] = 1;
          return acc;   
},{})

//console.log(output);

////
function countDuplicates(data){
    const output = {};
    
    data.map((d)=>{
      output[d] = (output[d] || 0)+1 ;
    });

    return output;
}

console.log(countDuplicates(items));