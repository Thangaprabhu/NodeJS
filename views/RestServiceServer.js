// https://www.tutorialspoint.com/nodejs/nodejs_restful_api.htm

var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
   fs.readFile( "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.get('/:id', function (req, res) {
   // First read existing users.
   fs.readFile( "users.json", 'utf8', function (err, data) {
       users = JSON.parse( data );
       var user = users["user" + req.params.id] 
       console.log( user );
       res.end( JSON.stringify(user));
   });
})

var server = app.listen(8081, function () {

	console.log("Server Started 2 apis are present");
	console.log("********1)http://localhost:8081/listUsers********");
	console.log("********2)http://localhost:8081/1********");
})