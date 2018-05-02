var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mikan Express Page' });
});

var result_from_mongo = [];

router.post('/', function(req, res, next) {
var query = req.body.nimi_kentta; 
db.collection("elokuvat_kokoelma").find(query).toArray(function(err, docs) {
    if (err) throw err;
    //Push result onto results_array
    result_from_mongo.push(docs); 
    // renders index.pug
    res.render('index', {results:'Gay marriage'});
  });
});

module.exports = router;
