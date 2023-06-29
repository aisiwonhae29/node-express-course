const express = require('express');
const app = express();

app.get('/', (req, res)=>{
  console.log('hellow worlds') ;
  res.send('asdsd');
})

app.listen(3000,()=>{

})