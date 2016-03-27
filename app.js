var express = require('express');

var app = express();

/* Node Application Port*/
var port = 5000; 

/* Sets the public directory as the static location for our static resources */ 
app.use(express.static('public'));
app.use(express.static('src/views'));

/* Routing requests*/

app.get('/', function(req, res) {
    res.send('Hello World!');    
});

app.get('/books', function(req, res) {
    res.send('Hello Books!');    
});

app.listen(port, function(err) {
    
    console.log('running server on port ' + port)
    
});