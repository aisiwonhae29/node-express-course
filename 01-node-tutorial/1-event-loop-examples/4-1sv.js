const http = require('http');
const fs = require('fs');
const readFile = fs.readFile;

const server = http.createServer((req,res)=>{
    console.log('request event')
    res.end('Hello world')
})

server.listen(5000,
    ()=>{
        console.log('server is running')
        console.log(readFile('first.txt', 'utf8', function(err, data){
  
            console.log(data)
        }))
})
