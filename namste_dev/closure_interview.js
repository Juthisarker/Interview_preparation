// function outer(){
//     var a =10;
//     function inner(){
//        console.log(a);
//     }
//     return inner;
// }
// //outer()();
// var close = outer();
// close();
/// 2nd example 
// function outer(b){
//     var a =10;
//     function inner(){
//        console.log(a,b);
//     }
//     return inner;
// }
// //outer()();
// var close = outer("outer function");
// close();
////3rd example
function outest(){
    var c =20;
function outer(b){
  //  var a =10;
    function inner(){
       console.log(a,b,c);
    }
    return inner;
}  
return outer;
}
//outer()();
var a =100;
var close = outest()("outer function");
close();
