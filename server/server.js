
var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.send('coucou le monde');
});

app.listen(3001);

