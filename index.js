var express = require('express');
var socket = require('socket.io')
 
//App setup
var app = express();
var server = app.listen(4000, function(){
    console.log('listening to requests on prt 4000');
});

// Staticfiles
app.use(express.static('public'));

// Socket setup
var io = socket(server);