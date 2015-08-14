var express = require('express');
var log = require('bole')('readings/router');
var join = require('path').join;
var reading = require('../readings/readingModel');

var router = new express.Router();

function home(req, res) {
  reading.findAll(function (error, readings) {
    if (error) {
      log.error(error, 'error finding readings');
      res.status(500).send(error);
      return;
    }
    res.render('./app/site/home.html', {readings: readings});
  });
}

router.use(express.static(join(__dirname, '../../public')));
router.get('/', home);

module.exports = router;
