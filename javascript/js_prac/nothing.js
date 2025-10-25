const http = require("http");
const path = require("path");
const fs = require("fs");
const ending = require('./confirm_the_ending');

const server  = http.createServer((req,res) => {
     if(req.url === '/api/users') {
        const users = [
            { name: 'Bob Smith', age: 40 },
            { name: 'Juthi Sarker', age: 28 }
        ];
        res.writeHead(200,{ 'Content-Type': 'application/json'});
    let result =     ending("Congratulation", "ontttt");
        res.end(JSON.stringify(result));
     }
})

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => console.log(`Server running on ${PORT}`));