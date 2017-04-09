/**
 * Created by Eduardo Velloso on 10/04/2017.
 */
var mongoose = require('mongoose');
var Cafe = mongoose.model('Cafe');

var createCafe = function(req,res){
    var cafe = {
        "name":req.body.name,
        "address":req.body.address,
        "distance":req.body.distance,
        "rating":req.body.rating,
        "photo":req.body.photo
    };
    cafes.push(cafe);
    res.send(cafe);
};

var findAllCafes = function(req,res){
    Cafe.find(function(err,cafes){
        if(!err){
            res.send(cafes);
        }else{
            res.sendStatus(404);
        }
    });
};

var findOneCafe = function(req,res){
    res.send(cafes[req.params.id]);
};

module.exports.createCafe = createCafe;
module.exports.findAllCafes = findAllCafes;
module.exports.findOneCafe = findOneCafe;