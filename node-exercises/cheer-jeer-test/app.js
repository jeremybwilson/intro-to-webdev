var express = require('express');
var app = express();

app.get('/cheer.txt', function(req, res){
  response.end('Hurrah for you awesome programmer');
});

app.get('/jeer.txt', function(req, res){
  response.end('I\'m crushing your head!');
});

var server = app.listen(8080, function() {
    console.log('Listening on port 8080');
});