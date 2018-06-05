List = require('../models/list.js')
var db_helper = require('../helpers/dbHelper.js')

var Processor = function () {}

Processor.prototype.getList = function(id) {
    list_data = db_helper.getList(id);
    var list = new List(list_data);
    return list.data;
}

Processor.prototype.getLists = function() {
    lists_data = db_helper.getLists();
    lists = []
    var list = {}

    for (let list_data of lists_data) {
        list = new List(list_data);
        lists.push(list.data)
    }

    return lists;
}




module.exports = Processor
