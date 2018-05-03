// if our user.js file is at app/models/user.js
var Elokuvat = require('./models/elokuvat');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mikan Express Page' });
});

Elokuvat.find({ elokuvan_nimi: '28 Weeks Later' }, function(err, user) {
  if (err) throw err;

  // object of the user
  console.log(user);
});

var result_from_mongo = [];

router.post('/', function(req, res, next) {
var query = req.body.nimi_kentta; 
db.collection("Elokuvat kokoelma").find(query).toArray(function(err, docs) {
    if (err) throw err;
    //Push result onto results_array
    result_from_mongo.push(docs); 
    // renders index.pug
    res.render('index', {'results': 'Hey', title: 'Arin Express Page' });
  });
});

module.exports = router;
