var express = require('express');
var router = express.Router();
var path = require('path');
//Data
var cats = ['Kris', 'Luna', 'Rubio'];


router.get('/', function(req, res) {
  res.send(cats);
});

router.post('/', function(req, res) {
  cats.push(req.body.catName);
  res.send(true);
});

module.exports = router;
