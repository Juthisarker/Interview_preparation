function a (){
    var b= 10;
    c();
    function c(){
        console.log(b);
    }
}

a();
///scope means where you can access specific variable or functions
//what is the scope of variable b 
//scope is related to lexical environment
//lexical environment is local memory + lexical environment of its parent
//
//when execution context is created it also creates the reference of it lexcial environment of its parent