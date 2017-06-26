
var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));

app.get('/', function(req, res){
  res.send('coucou le monde');
});

app.get('/users', function(req, res){
  res.json({data:'la liste des utilisateurs'});
});

app.listen(3001);

