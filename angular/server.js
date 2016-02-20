var express = require('express');
var app = express();
var users = require('./models/users')
var _ = require('underscore')

app.set('views', './public');
app.use(express.static('public'));
app.use(express.static('./node_modules/bootstrap/dist'));

var config = {
  showCount: 20
}

app.get('/api/users', function (req, res) {
  var page = req.param('page') || 1
  var nextPage = page * config.showCount
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify( users.slice(0, page * config.showCount) ));
})

app.get('/', function(req, res){
  res.sendfile('./public/index.html');
});

app.use(function(req, res){
  res.sendfile('./public/index.html');
});

app.listen(3333, function () {
  console.log('Server started on port 3333!');
});
