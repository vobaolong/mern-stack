const express = require('express')
const route = require('./route/route')
const db = require('./database/db')
let app = express()

const port = process.env.port || 3000
db.connect()
app.use(express.json())
route(app)
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

app.listen(port)

console.log('RESTful API server started on: '+ port)