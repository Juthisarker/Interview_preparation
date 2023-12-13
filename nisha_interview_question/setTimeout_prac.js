const { resolve } = require("path");

function delay(i) {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(i);
        }, 1000);
    })
}

async function test() {
    console.log("Started");
    for (let i = 1; i <=10; i++) {
        const result = await delay(i);
        console.log(result);
    }
    console.log("Ended");
}

//test();

///another problem

const users = ["nishaSing@gmail.com","sneha@gmail.com","juthisarker@gmail.com"];

function delaySendingEmail(i) {
   return new Promise((resolve)=>{
    setTimeout(() => {
        resolve(i);
    }, 1000);
   });
}
 
async function sendMail() {
    for(user of users){
        const result = await delaySendingEmail(user);
        console.log(`Email sent to ${user}`);
    }
    console.log("Email sent to all the users");
}

//sendMail();


function delayMessage(i) {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(i);
        }, 1000);
    })
}

async function mails() {
    for(user of users) {
        const result = await delayMessage(user);
        console.log(`Email sent to ${result}`);
    }

    console.log("Email sent to all the users");
}

mails();
