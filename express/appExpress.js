var express = require('express');
var app = express();
var cors = require('cors');

var bodyParser = require('body-parser');
const zip2bar = require('../public/core/Zipcode');
const bar2zip = require('../public/core/Barcode');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());


// app.use(express.static('public'));
app.get('/zipcode?', function (req, res) {
    console.log(req.query.code);
    let bar = new zip2bar().zipcode2Barcode(req.query.code);
    console.log(bar);
    res.send(bar);
});

/*app.post('/', function (req, res) {

 let bar = new bar2zip().barcode2Zipcode(req.body.input);
 console.log(bar);
 res.send(bar);
 });*/


app.listen(3000, function () {
    console.log('3000 port ');
});

module.exports = app;