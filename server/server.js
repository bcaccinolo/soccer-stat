
var express = require('express');
var morgan = require('morgan'); // requests log

var app = express();
app.use(morgan('dev'));

app.todos = ["faire les courses", "aller faire la vidange"];

app.get('/', function(req, res){

  res.json(app.todos);

});

app.get('/set', function(req, res){

  var new_todo = req.query.todo

  if (new_todo != '') {
    app.todos.push(new_todo);
  }

  res.json(app.todos);
});

app.get('/delete/:id', function(req, res){

  if (req.params.id != '') {
    app.todos.splice(req.params.id, 1);
  }

  res.json(app.todos);

});


app.listen(3001);

