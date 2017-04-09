/**
 * Created by Eduardo Velloso on 10/04/2017.
 */
var cafes = [
    {
        "name":"Hipster Emporium",
        "address":"Richmond",
        "distance":"6.2 km",
        "rating":"4.0",
        "photo":"https://source.unsplash.com/O50HtSlCzag/"
    },
    {
        "name":"Lumberjack Cafe",
        "address":"Fitzroy",
        "distance":"1.9 km",
        "rating":"4.4",
        "photo":"https://source.unsplash.com/QC1u9B333ys/350x233"
    },
    {
        "name":"The Naked Barista",
        "address":"Collingwood",
        "distance":"2.7 km",
        "rating":"4.3",
        "photo":"https://source.unsplash.com/g-erOiuDxro/350x233"
    },
    {
        "name":"The Coffee Cobbler",
        "address":"Melbourne CBD",
        "distance":"2.2 km",
        "rating":"3.2",
        "photo":"https://source.unsplash.com/BonjBu19IiY/350x233"
    },
    {
        "name":"Kofsmanship",
        "address":"Toorak",
        "distance":"9.3 km",
        "rating":"3.9",
        "photo":"https://source.unsplash.com/xoBg77epln0/350x233"
    },
    {
        "name":"Before it Becomes Cool",
        "address":"Carlton",
        "distance":"650 m",
        "rating":"4.6",
        "photo":"https://source.unsplash.com/94taEmdowRw/350x233"
    },
    {
        "name":"Kawa",
        "address":"Fitzroy",
        "distance":"1.9 km",
        "rating":"2.4",
        "photo":"https://source.unsplash.com/4qJdtfJ2MmQ/350x233"
    }
];

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
    res.send(cafes);
};

var findOneCafe = function(req,res){
    res.send(cafes[req.params.id]);
};

module.exports.createCafe = createCafe;
module.exports.findAllCafes = findAllCafes;
module.exports.findOneCafe = findOneCafe;