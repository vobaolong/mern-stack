// import dotenv from 'dotenv'
// import connectDB from './database/db'
// import express from 'express'

const express = require('express')
const route = require('./route/route')
const db = require('./database/db')
const cors =  require("cors")
const env = require("dotenv")
const cookieParser = require("cookie-parser")
const session = require('express-session');
const passport = require("passport");


env.config()
const port = process.env.PORT || 3000

let app = express()

app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


app.use(cors({
    credentials: true,
    origin: ['http://localhost:${port}']
  }))

app.use(cookieParser())
app.use(express.json())

db.connect()

route(app)
app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
})

app.listen(port)

console.log('RESTful API server started on: ' + port)