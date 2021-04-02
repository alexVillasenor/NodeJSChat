var express = require('express');
 
//App setup
var app = express();
var server = app.listen(4000, function(){
    console.log('listening to requests on prt 4000');
});

// Staticfiles
app.use(express.static('public'));
