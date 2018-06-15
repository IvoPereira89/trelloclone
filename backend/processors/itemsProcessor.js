Item = require('../models/item.js')
var db_helper = require('../helpers/dbHelper.js')

var Processor = function () {}

Processor.prototype.getItems = function(query = {}) {
    items_data = db_helper.getItems(query);
    items = []
    var item = {}

    for (let item_data of items_data) {
        item = new Item(item_data);
        items.push(item.data)
    }

    return items;
}

Processor.prototype.getItem = function(id) {
    item_data = db_helper.getItem(id);
    var item = new Item(item_data);
    return item.data;
}

Processor.prototype.saveItem = function(data) {
  item_data = db_helper.saveItem(data)
  var item = new Item(item_data)
  return item.data
}

Processor.prototype.deleteItem = function(id) {
    item_data = db_helper.deleteItem(id);
    var item = new Item(item_data);
    return item.data;
}

module.exports = Processor
