// function x(){
// for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, i* 1000);
// }
//     console.log("namaste javascript");
// }
// x();
/////////// second style
function x(){
    for (let i = 1; i <= 5; i++) {
    function close(x){
            setTimeout(() => {
                console.log(x);   console.log(x);
            }, x* 1000);
        }
        close(i);
    }
  console.log("namaste javascript");
    }
  //  x();

  function ui() {
    for(let i = 0; i<=5; i++) {
      function close(x) {
        setTimeout(() => {
          console.log(i);
        }, x*1000);
      }
      close(i)
    }
  }

  ui();

