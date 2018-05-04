// if our user.js file is at app/models/user.js
var Elokuvat = require('../models/elokuvat');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mikan Express Page' });
});

Elokuvat.find({ elokuvan_nimi: '28 Weeks Later' }, function(err, user) {
  if (err) throw err;

  // object of the user
  console.log("'Movie found!'");
});

// create a new user
var newUser = Elokuvat({
  elokuvan_nimi: "Jussi",
  nayttelijat: "Kalle", 
  genre: "Huumori",
  kuva: "Tulee",
  rotten_tomatoes_pisteet: "100",
  sertifikaatti: "Tuore",
  kuvaus: "OK",
  oma_arvio: "Jee"
});

// save the user
newUser.save(function(err) {
  if (err) throw err;

  console.log('User created!');
});

router.post('/', function(req, res, next) {
res.render('index', {title: 'Arin Express Page' });
});

module.exports = router;
