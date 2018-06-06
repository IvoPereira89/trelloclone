Item = require('../models/item.js')
var db_helper = require('../helpers/dbHelper.js')

var Processor = function () {}

Processor.prototype.getItems = function() {
    items_data = db_helper.getItems();
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

Processor.prototype.updateItem = function (id, data) {
  const item_data = db_helper.updateItem(id, data)
  const item = new Item(item_data)
  return item.data
}

module.exports = Processor
