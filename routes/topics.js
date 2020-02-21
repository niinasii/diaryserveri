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


router.route('/topics/:id')
  .get(function (req, res, next) {
    ts.getTopic(req.params.id, (rows) => {
      res.json(rows);
    });
  })

module.exports = router;
