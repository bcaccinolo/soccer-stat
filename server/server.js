
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

  var team_file = './data/table.json'
  jsonfile.readFile(team_file, function(err, obj) {
    res.json(obj);
  })


});

app.get('/set', function(req, res){

  var new_todo = req.query.todo

  if (new_todo != '') {
    app.todos.push(new_todo);
  }

  res.json(app.todos);
});

app.get('/todos/delete/:id', function(req, res){

  if (req.params.id != '') {
    app.todos.splice(req.params.id, 1);
  }

  res.json(app.todos);

});

app.post('/todos/new', function(req, res){

  var new_todo = req.body.todo

  if (new_todo != '') {
    app.todos.push(new_todo);
  }

  res.json(app.todos);
});


app.listen(3001);

