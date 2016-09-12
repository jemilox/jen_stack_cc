var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded( {extended: false});

app.listen('2001', 'localhost', function () {
  console.log("I'm listening, Dave");
});//end server up
