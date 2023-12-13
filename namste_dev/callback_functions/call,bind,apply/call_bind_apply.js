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
//printfullname.apply(name2,["barisal","barisal"]);

let printMyName = printfullname.bind(name2,"barisal","barisal");
//printMyName();



let address1 = {
    road: '51, patla khan len',
    district: 'dhaka'
}
let address2= {
    road: 'mostofapur',
    district: 'madaripur'
}

let printFullAddress = function(faltno, postalCode) {
    console.log(`falt no : ${faltno} ${postalCode} :${this.road} and ${this.district}`);
}
printFullAddress.call(address1,'56',1200);
printFullAddress.apply(address2,[90, 1123]);

let ss= printFullAddress.bind(address2,45,1203);
ss();