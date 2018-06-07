var express = require('express')
var cors = require('cors')
var expressValidator = require('express-validator')

var lists_router = require('./routers/listsRouter')
var items_router = require('./routers/itemsRouter')

const hostname = '127.0.0.1'
const port = 3000

var app = express()
app.use(cors())
app.use(express.json())
app.use(expressValidator())
app.use('/list', lists_router)
app.use('/item', items_router)

var server = app.listen(port, hostname, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
})
