const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res)=>{
     if(req.url==='/api/users'){
        const users = [
           {name: 'halu', address:'tyyy'},
           {name: 'nope', address:'uioio'},
        ]
        res.writeHead(200,{
            'Content-Type': 'application/json'
        });
        res.jsonStr
        res.end(JSON.stringify(users));
     }
})
.listen(5000,()=> console.log('server runnning-----'))