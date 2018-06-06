var express = require('express')
var router = express.Router()

Processor = require('../processors/itemsProcessor.js')
var item_processor = new Processor()

router.get('/', function (req, res) {
  res.send(item_processor.getItems())
})

router.get('/:id', function (req, res) {
  res.send(item_processor.getItem(req.params.id))
})

router.post('/', function (req, res) {
  res.send(item_processor.createItem(req.body))
})

router.put('/:id', function (req, res) {
  res.send(item_processor.updateItem(req.params.id, req.body))
})

module.exports = router
