var express = require('express')
var router = express.Router()
const { body } = require('express-validator/check')

Processor = require('../processors/itemsProcessor.js')
var item_processor = new Processor()

router.get('/', function (req, res) {
  res.send(item_processor.getItems())
})

router.get('/:id', function (req, res) {
  res.send(item_processor.getItem(req.params.id))
})

router.post('/', function (req, res) {
  req.checkBody('title', 'Enter a valid Title').isLength({ min: 4 }).isString()
  req.checkBody('description', 'Enter a valid Description').isLength({ min: 8 }).isString()
  req.checkBody('list_id', 'The Item has no reference to any List').exists().isInt()
  var errors = req.validationErrors()
  errors ? res.send(errors) : res.send(item_processor.saveItem(req.body))
})

module.exports = router
