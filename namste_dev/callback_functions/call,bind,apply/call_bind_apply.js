let name1 = {
    firstname : "juthi sarker",
    lastName : "aka",

}

let printfullname = function (homeTown,division){
    console.log(this.firstname," ",this.lastName + " "+ homeTown+" "+division);
}
printfullname.call(name1,"dhaka","dhaka");

let name2={
    firstname : "tanu",
    lastName : "das",
}

printfullname.call(name2,"barisal","barisal");
printfullname.apply(name2,["barisal","barisal"]);

let printMyName = printfullname.bind(name2,"barisal","barisal");
printMyName();