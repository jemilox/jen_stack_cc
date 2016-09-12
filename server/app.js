var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded( {extended: false});

var count = 0;

app.listen('3000', 'localhost', function () {
  console.log("3000 is up!");
});//end server up

app.get('/', function (req, res) {
  console.log('base url hit');
  res.sendFile(path.resolve('public/index.html'));
});

app.use(express.static('public'));

app.post('/jokeSend', urlencodedParser, function ( req, res ) {
  console.log('in jokeSend post');
  console.log(req.body);
  var author = req.body.authorOut;
  var joke = req.body.jokeOut;
  var punchLineIn = req.body.punchLineOut;

  jokes.push({whoseJoke: author, jokeQuestion: joke, punchLine: punchLineIn});
  console.log(jokes);


});

// initial jokes provided by the client
var jokes = [
  {
    whoseJoke: "Huck",
    jokeQuestion: "What's the difference between roast beef and pea soup?",
    punchLine: "Anyone can roast beef."
  },
  {
    whoseJoke: "Millie",
    jokeQuestion: "What do you call a pile of cats?",
    punchLine: "A meowntain!"
  },
  {
    whoseJoke: "dEv",
    jokeQuestion: "Why should you not play cards in the forest?",
    punchLine: "Too many Cheetahs"
  }
];

app.post('/getJoke', urlencodedParser, function (req, res) {
  console.log(jokes.length);
  if (count > jokes.length - 2){
    count = 0;
  }else{
  count ++;}
  res.send(jokes[count]);

});
