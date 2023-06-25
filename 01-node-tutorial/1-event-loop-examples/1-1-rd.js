const {readFile} = require('fs');

readFile('first.txt', 'utf8', function(err, data) {
    if(err){
        console.log('error occured')
        return
    }
    console.log(data);
});

