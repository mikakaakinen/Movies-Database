// if our user.js file is at app/models/user.js
var Elokuvat = require('../models/elokuvat');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mikan Express Page' });
});

// create a new user
var newUser = Elokuvat({
  Elokuvan_nimi: "Pertti",
  Nayttelijat: ["Kalle", "Jussi"],
  Genre: "Huumori",
  Kuva: "Tulee",
  Rotten_Tomatoes_pisteet: 100,
  Sertifikaatti: "Tuore",
  Kuvaus: "OK",
  Oma_arvio: "Jee"
});

// save the user
newUser.save(function(err) {
  if (err) throw err;

  console.log('User created!');
});

router.post('/', function(req, res, next) {
console.log("'Post router operates!'");
var query = req.body.nimi_kentta;
Elokuvat.find({Elokuvan_nimi:query},(function(err, user) {
if (err) throw err;
// object of the user
res.render('index', {"docs": user});
}));

var fs = require('fs'), path = require('path');

exports.index = function(req, res){
    fs.readFile(
        path.join(__dirname, '../../public/images/Notting Hill.jpg'),
        function (err, data) {
          if (err) throw err;
            res.render('index', {
                src: data.toString('base64')
            });
    });
};
});
module.exports = router;
