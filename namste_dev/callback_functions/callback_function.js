//what is a callback functions in javascript ?
//----take a function and pass it into another function
//---it gives us access to the whole asynchoronous js world
//javascript is a sychoronous and single- threaded language

// function x(){

// }

// x(function y(){

// });

// setTimeout(function () {
//     console.log("timer");
// },5000);

//---- here function y giving function x the responsibility 

//blocking the main thread 

// power of callbacks ? 

//deep about event listeners


//closures demo with event listeners
function attachment(){
    let count = 0 ;
    document.getElementById("clickMe").addEventListener("click",function xyz() {
        console.log("button clicked",++count);
    });
    }
//scope demo with event listners

//garbage collections & removeEventListners


