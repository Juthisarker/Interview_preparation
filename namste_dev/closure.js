///a closure is a function that binds together with its lexical environment
// function z() {
//     var c = 70;
//     function x() {
//         let a = 10;
//         function y() {
//             console.log(a, c);
//         }
//         y();
//     }
//     x();
// }
// // var zy = z();
// // zy();
// z()
///2nd one
// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//   return y ;
// }
// var z = x();

function z(){
    var b = 900;
    function x(){
        var a = 7;
         function y(){
         console.log(a,b);
         }
         y();
    }
    x();
}z();
