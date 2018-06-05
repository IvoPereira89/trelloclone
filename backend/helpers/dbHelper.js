var fs = require('fs');
var db = JSON.parse(fs.readFileSync('./db.json', 'utf8'));

exports.getItems = function () {
    return db.items;
}

exports.getItem = function (id) {
    for (let item of db.items) {
        if (item.id == id) {
            return item;
        }
    }

    return {};
}

exports.getLists = function () {
    return db.lists
}

exports.getList = function (id) {
    for (let list of db.lists) {
        if (list.id == id) {
            return {
                "id": list.id,
                "name": list.name,
                "items": itemsForList(list.id)
            }
        }
    }
}

var itemsForList = function (id) {
    var items = [];

    for (let item of db.items) {
        if (item.list_id == id) {
            items.push(item);
        }
    }

    return items;
}
