// load the things we need
require('dotenv').config();
const baseurl = process.env.URL_BASE;
const port = process.env.PORT;
const db = process.env.DB;

console.log(baseurl);
var express = require('express');
var app = express();
// app.use(cors())

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  
    res.render('pages/login',{ baseurl: baseurl });
});
// persediaan page
app.get('/penjualan', function(req, res) {
  
    res.render('pages/penjualan',{ baseurl: baseurl });
});

// persediaan page
app.get('/persediaan', function(req, res) {
    res.render('pages/persediaan');
});
// info page
app.get('/info', function(req, res) {
    res.render('pages/info');
});


app.listen(port);
console.log(port+' is the magic port');
