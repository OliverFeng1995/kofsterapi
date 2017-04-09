/**
 * Created by Eduardo Velloso on 10/04/2017.
 */
// Create database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cafes',function(err){
    if(!err){
        console.log('Connected to mongo');
    }else{
        console.log('Failed to connect to mongo');
    }
});

var cafeSchema = mongoose.Schema(
    {
        "name":String,
        "address":String,
        "distance":String,
        "rating":String,
        "photo":String
    }
);
mongoose.model('Cafe',cafeSchema);

