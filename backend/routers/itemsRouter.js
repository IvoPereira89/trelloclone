var express  = require('express');
var router = express.Router();

Processor = require('../processors/itemsProcessor.js');
var item_processor = new Processor();

router.get('/:id', function (req, res) {
    res.send(item_processor.getItem(req.params.id));
})

router.get('/', function (req, res) {
    res.send(item_processor.getItems());
})

module.exports = router;
