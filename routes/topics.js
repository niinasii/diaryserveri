var express = require('express');
var router = express.Router();
var ts = require('./topicsService');

/* GET users listing. */
router.route('/topics')
  .get(function (req, res, next) {
    ts.getTopics(rows => {
      res.json(rows);
    });
  })
  .post(function (req, res, next) {
    ts.insertTopic(req.body, (rowCount) => {
      if (rowCount > 0)
        res.status(201).json({ message: 'Inserted' });
      else {
        res.status(400).json({ message: 'Failed to insert' });
      }
    });
  });

router.route('/topics/:id')
  .get(function (req, res, next) {
    ts.getTopic(req.params.id, (rows) => {
      res.json(rows);
    });
  })

module.exports = router;
