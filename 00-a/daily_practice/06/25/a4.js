const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url==='/about'){
        for(let i=0; i<1000; i++){
            for(let j=0; j<1000; j++){
                console.log(`${i} ${j}`)
            }
        }
    }
    console.log('request event')
    res.end('Hello Worlds')
})