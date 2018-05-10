// if our user.js file is at app/models/user.js
var Elokuvat = require('../models/elokuvat');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mikan Express Page' });
});

router.post('/', function(req, res, next) {
console.log("'Post router operates!'");
var query = req.body.nimi_kentta;
Elokuvat.find({Elokuvan_nimi:query},(function(err, user) {
if (err) throw err;
// object of the user
res.render('index', {docs: user});
}));
});
module.exports = router;
