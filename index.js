var express = require('express');
var app = express();
const logger = require('./logger');

app.get('/', function (req, res) {
  res.send('Hello World.');
  logger.info('I am infor message');  //logs the info log message
  logger.error('I am error message'); //logs the error log message
});

app.listen(8000, function () {
  console.log('Listening on port 8000!');
});