var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mikan Express Page' });
});


router.post('/', function(req, res, next) {
var query = req.body.nimi_kentta; 
const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('Elokuvat kokoelma');
  // Find some documents
  collection.find(query).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs);
    res.render('index', {'results': docs });
  });
};
});

module.exports = router;
