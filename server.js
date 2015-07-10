// Run via "node server.js"
// For https uncomment some lines below and run "sudo /opt/bin/node server.js"
// FYI: Firefox only save passwords when page is served over https

var express = require('express');
var bodyParser = require('body-parser');
// Uncomment for https:
//var https = require('https');
var http = require('http');
var fs = require('fs');

// Uncomment for https:
//var options = {
//  key: fs.readFileSync('/etc/nginx/ssl/my.key.pem'),
//  cert: fs.readFileSync('/etc/nginx/ssl/my.cert.pem')
//};

var app = express();

app.use(bodyParser.urlencoded());

app.post('/login', function(req, res){
  res.redirect(req.body.redirectTo);
  // or for the XMLHttpRequest test (uncomment the redirect in the line above):
  //res.send('Hello World!');
});

app.use(express.static(__dirname));
app.listen(8080);
// Uncomment for https:
// https.createServer(options, app).listen(443);
console.log("started");