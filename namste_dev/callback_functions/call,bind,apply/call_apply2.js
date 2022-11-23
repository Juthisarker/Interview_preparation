let name ={
    firstName : "juthi",
    lastName :"sarker",
}
let printFullname = function(hometown){
    console.log(this.firstName+" "+ this.lastName+" from "+hometown);
};
printFullname.call(name,"madaripur");
let name2 = {
    firstName : "tanu",
    lastName : "das"
};

printFullname.call(name2,"madaripur");
printFullname.apply(name2,["madaripur"]);

let printMyName = printFullname.bind(name2,"mumbai","maharastra");
printMyName();