
//pure function
// function add(num1, num2){
//     return num1+num2;
// }
// console.log(add(1,2));
// console.log(add(4,12));

// impure function
// function addRandom(num1){
//      return num1+ Math.random();
// }
// console.log(addRandom(2));

// impure function cz its changing the variable "previousResult" outside of its function (side effect)
// let previousResult = 0;
// function addMoreNumbers(num1,num2){
//      const sum = num1 + num2 ;
//      previousResult =sum;
//      return sum ;
// }
// console.log(addMoreNumbers(2,3));

//impure function cz its changing the array outside of the fuction as we pass the exact memory address of the array in the parameter

// const hobbies = ['Sports','Cooking'];
// function printHobbies(h){
//     h.push("swimimg");
//     console.log(h);
// }
//  printHobbies(hobbies);

//pure function

// const greetings = (name)=>{
//     return `hey${name}`;
// }
//  console.log(greetings('nisha'));
//impure fuction cz the function output changes depending on "message" variable which is outside of function
// let message = 'good morning';
// const greetings = (name)=>{
//     return `hey ${message} ${name}`;
// }
// console.log(greetings('nisha'));
// message = 'good night';
//  console.log(greetings('nisha'));

//impure fuction cz the function changes the global variable "message" 
//  let message = 'good morning';
// const greetings = (name)=>{
//     message = "hello"
//     return `hey ${message} ${name}`;
// }
// console.log(greetings('nisha'));
// message = 'good night';
//  console.log(greetings('nisha'));
/// impure function cz its using console.log which is an external api
let message = 'good morning';
const greetings = (name)=>{
    console.log('hello');
    return `hey ${message} ${name}`;
}
 console.log(greetings('nisha'));

