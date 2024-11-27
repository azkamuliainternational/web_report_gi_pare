// load the things we need

var express = require('express');
var app = express();
// app.use(cors())

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  
    res.render('pages/login');
});
// persediaan page
app.get('/penjualan', function(req, res) {
  
    res.render('pages/penjualan');
});

// persediaan page
app.get('/persediaan', function(req, res) {
    res.render('pages/persediaan');
});
// info page
app.get('/info', function(req, res) {
    res.render('pages/info');
});


app.listen(8081);
console.log('8081 is the magic port');
