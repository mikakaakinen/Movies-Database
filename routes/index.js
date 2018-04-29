var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello Application');
  res.render('index', { title: 'Mikan Express Page' });
});

module.exports = router;
