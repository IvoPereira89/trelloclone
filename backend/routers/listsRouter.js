var express  = require('express');
var router = express.Router();

Processor = require('../processors/listsProcessor.js');
var lists_processor = new Processor();

router.get('/:id', function (req, res) {
    res.send(lists_processor.getList(req.params.id));
})

router.get('/', function (req, res) {
  res.send(lists_processor.getLists());
})

module.exports = router;
