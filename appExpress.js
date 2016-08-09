var express = require('express');
const zip2bar = require('./public/core/Zipcode');
const bar2zip = require('./public/core/Barcode');
var app = express();

app.use(express.static('public'));

app.get('/zipcode', function (req, res) {
    let bar = new zip2bar().zipcode2Barcode(req.query.code);
    res.send(bar);
});

app.get('/barcode', function (req, res) {
    let num = new bar2zip().barcode2Zipcode(req.query.code);
    res.send(num);
});


app.listen(3000, function () {
    console.log('3000 port ');
});

module.exports = app;