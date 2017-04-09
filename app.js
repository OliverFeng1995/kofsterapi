/**
 * Created by Eduardo Velloso on 10/04/2017.
 */
// Set up express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Create database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cafes',function(err){
    if(!err){
        console.log('Connected to mongo');
    }else{
        console.log('Failed to connect to mongo');
    }
});

var routes = require('./routes/routes.js');
app.use('/',routes);

// Start the server
app.listen(3000,function(req,res){
   console.log('Express listening on port 3000');
});