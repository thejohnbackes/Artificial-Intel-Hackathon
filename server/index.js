var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var port = process.env.PORT || 3000;
app.listen(port);
console.log("Listening on port " + port + "...");
