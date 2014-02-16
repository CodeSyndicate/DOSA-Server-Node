'use strict';

var config = require('./config/config.js'),
    express = require('express'),
    app = express();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

app.get('/', function (req, res) {
    res.send('hello!');
});

var port = process.env.PORT || config.port;
app.listen(port);
console.log('Express app started on port ' + port);