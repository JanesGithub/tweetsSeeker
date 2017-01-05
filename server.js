var Twitter = require('twitter');
var secret = require('./secret.js');
var client = new Twitter({
  consumer_key: secret.keys.consumer_key,
  consumer_secret: secret.keys.consumer_secret,
  access_token_key: secret.keys.access_token_key,
  access_token_secret: secret.keys.access_token_secret
});

var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/static'));
// app.use('/', function(req,res) {
//   res.sendFile(path.join(__dirname + '/static/index.html'));
// });
app.use('/search', function(req,res) {
  //console.log(req);;

  client.get('search/tweets', {q: req.query.q}, function(error, tweets, response) {
     console.log(tweets);
     res.send(tweets);
  });

});

app.listen(8081);
