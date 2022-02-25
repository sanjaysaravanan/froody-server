var jsonServer = require('json-server')

var object = require('./db.json')

var router = jsonServer.router(object) // Express router
const middlewares = jsonServer.defaults({static: '/'})
var server = jsonServer.create()       // Express server

server.use(router)
server.use(middlewares);
server.listen(3000, '0.0.0.0')