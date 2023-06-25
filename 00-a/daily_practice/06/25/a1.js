const fs = require('fs');

const readFile = fs.readFile;

readFile('text.txt', 'utf-8', (err, data)=>{
    if(err){
        console.log('error occured');
        return;
    }
    console.log(data);
})

const http = require('http');

const server = http.createServer((req, res)=>{
    console.log('request event')
    res.end('Hello worldsasd')
    
})
server.listen(5000,()=>{
    console.log('server listening on port : 5000....')
    setTimeout(()=>{
        console.log('asdasd')
    },1000);
})