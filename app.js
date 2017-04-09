/**
 * Created by Eduardo Velloso on 10/04/2017.
 */
// Set up express
var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send('Hello World');
});

app.listen(3000,function(req,res){
   console.log('Express listening on port 3000');
});