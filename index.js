var express = require('express');


//App setup
var app = express();
var server = app.listen(5001,function(){
    console.log('listening on 5000!')
}); 

// Static files

app.use(express.static('public'));