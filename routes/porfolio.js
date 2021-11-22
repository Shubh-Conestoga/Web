var express = require('express');
var router = express.Router();

// handlling / req
router.get('/', function(req, res, next) {
  res.render('portfolio', { title: 'Portfolio' });
});
module.exports = router;
