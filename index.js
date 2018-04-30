var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mikan Express Page' });
});

router.post('/', function(req, res, next) {
var query = req.body.nimi_kentta; 
db.collection("Elokuvat kokoelma").find(query).toArray(function(err, docs) {
    if (err) throw err;
    // renders index.pug
    res.render('index', docs);
  });
});

module.exports = router;
