//function statement aka function declaration

function a(){
    console.log("a claalled");
}

//function expression


var b= function(){
    console.log("b called");
}

//anonymous function
// function () {
// //it is used when functions are used as values... like in the function expression we have used.
// }
//named function expression

var b= function  xyz(){
    console.log("b called");
}

//b();//this is right...
//xyz();  //this will give you error 
// diffrence between parameters and argument
var b= function(param1, param2){
    console.log("b called");
}
//b(1,2);

//first class function
//---ability to be used like values
//---can be used as an value , passing one function as an argument and return the function also
var b = function (){
    return function (){

    }
}
console.log(b());
//arrow function
//let, const, arrow functions are introduced in es6