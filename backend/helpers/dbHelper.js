var fs = require('fs');
var db = JSON.parse(fs.readFileSync('./db.json', 'utf8'));
var _this = this

exports.getItems = function (query = {}) {
  return query.list_id || query.term ? itemsForList(query) : db.items
}

exports.getItem = function (id) {
  if (id !== null || typeof id !== typeof undefined) {
    for (let item of db.items) {
      if (item.id === id) {
        return item
      }
    }
  }
  return {}
}

exports.deleteItem = function (id) {
  fs.readFile('./db.json', function (err, content) {
    if (err) throw err
    var fileObject = JSON.parse(content)
    fileObject.items = fileObject.items.filter((item) => { return item.id !== parseInt(id) })
    const json = JSON.stringify(fileObject, null, 2)
    fs.writeFile('./db.json', json, 'utf8', function (err) {
      if (err) throw err
    })
  });
  return {}
}

exports.saveItem = function (data) {
  const originalItem = _this.getItem(data.id)
  fs.readFile('./db.json', function (err, content) {
    if (err) throw err
    var fileObject = JSON.parse(content)
    if (originalItem.id) {
      fileObject.items.map((item) => {
        if (item.id === data.id) {
          item.title = data.title
          item.description = data.description
        }
      })
    } else {
      data.id = db.items[db.items.length - 1].id + 1
      fileObject.items.push(data)
    }
    const json = JSON.stringify(fileObject, null, 2)
    fs.writeFile('./db.json', json, 'utf8', function (err) {
      if (err) throw err
    })
  })
  return data
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

var itemsForList = function (query) {
    var items = []
    var config = []
    switch(Object.keys(query)[0]) {
      case "list_id":
        config = {list_id: query.list_id }
        break
      case "term":
        config = {title: query.term.toString().toLowerCase()}
        break
      default:
        config = {list_id: query}
    }
    for (let item of db.items) {
      if (config.title) {
        if (item['title'].toLowerCase().includes(config.title)) { items.push(item) }
      } else {
        if (item['list_id'] == config.list_id) { items.push(item) }
      }
        
    }

    return items;
}
