function delay(i){
    return new Promise((resolve)=>{
        setTimeout(() => {
         resolve(i)
            }, i*1000); 
    });
}
async function outer(){
    console.log("Started");
  for (let i = 1; i <= 10 ; i++) {
  const result = await delay(i);
  console.log(result);
} 
console.log("Ended");
}
outer();
