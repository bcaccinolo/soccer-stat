
var express = require('express');
var morgan = require('morgan'); // requests log
var bodyParser = require('body-parser');
var jsonfile = require('jsonfile')

var livereload = require('express-livereload')

var app = express();

livereload(app, config={})

app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/teams', function(req, res){

  var team_file = './data/ligue1.json'
  jsonfile.readFile(team_file, function(err, obj) {
    res.json(obj);
  })

});

app.get('/team/:name', function(req, res){

  var team_file = './data/' + req.params.name + '.json'

  jsonfile.readFile(team_file, function(err, obj) {
    if (err != null) {
      console.log(err);
      res.status(404).send({error: 'error team not found'});
    } else {
      res.json(obj);
      res.status(200).end();
    }
  })

});

app.listen(3001);

