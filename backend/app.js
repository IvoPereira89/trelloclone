var express = require('express');
var app = express();

var lists_router = require('./routers/listsRouter')
var items_router = require('./routers/itemsRouter')

const hostname = '127.0.0.1';
const port = 3000;

app.use('/list', lists_router)
app.use('/item', items_router)

var server = app.listen(port, hostname, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
