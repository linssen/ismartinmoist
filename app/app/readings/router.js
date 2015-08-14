var reading = require('./readingModel');
var log = require('bole')('readings/router');
var router = require('express').Router();

function getReadings(req, res) {
  reading.findAll(function (error, readings) {
    if (error) {
      log.error(error, 'error finding readings');
      res.status(500).send(error);
      return;
    }
    res.json(readings);
  });
}

function createReading(req, res) {
  res.status(201).send();
}

router.post('/readings', createReading);
router.get('/readings', getReadings);

module.exports = router;
