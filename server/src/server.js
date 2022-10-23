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
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const cloudinary = require("cloudinary").v2;
const fileUpload = require("express-fileupload");

env.config()
const port = process.env.PORT || 4200

let app = express()

app.use(
  fileUpload({
    useTempFiles: true,
    limits: { fileSize: 50 * 2024 * 1024 },
    createParentPath: true,
  })
);

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});


app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

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