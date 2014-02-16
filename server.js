'use strict';

var express = require('express'),
    app = express();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

app.get('/', function (req, res) {
    res.send('hello again 333!');
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Express app started on port ' + port);
console.log('__dirname ' + __dirname);