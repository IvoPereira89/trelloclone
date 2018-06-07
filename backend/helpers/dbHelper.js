var fs = require('fs');
var db = JSON.parse(fs.readFileSync('./db.json', 'utf8'));
var _this = this

function manipulateItem (data, action) {
  fs.readFile('./db.json', function (err, content) {
    if (err) throw err
    var fileObject = JSON.parse(content)
    if (action === 'create') {
      data.id = db.items[db.items.length - 1].id
      fileObject.items.push(data)
    } else if (action === 'update') {
      fileObject.items.map((item) => {
        if (item.id === data.id) {
          item.title = data.title
          item.description = data.description
        }
      })
    } else {
      return {}
    }
    const json = JSON.stringify(fileObject, null, 2)
    fs.writeFile('./db.json', json, 'utf8', function (err) {
      if (err) throw err
    })
  })
  return data
}

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

exports.createItem = function (data) {
  return manipulateItem(data, 'create')
}

exports.updateItem = function (id, data) {
  const item = _this.getItem(id)
  if (item) {
    return manipulateItem(data, 'update')
  }
  return {}
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
