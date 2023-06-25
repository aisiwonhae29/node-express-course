const {readFile, writeFile} = require('fs').promises


const start = async ()=>{
    try{
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/secnond.txt', 'utf8')
        
    }
}