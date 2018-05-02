var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://MikaKaakinen:o5lglNOWuF@ds014808.mlab.com:14808/elokuvat_database';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mikan Express Page' });
});

router.post('/', function(req, res, next) {
  var resultArray = [];
  mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    var cursor = db.collection('elokuvat_kokoelma').find();
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('index', {results: resultArray});
    });
  });
});

module.exports = router;
