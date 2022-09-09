const path = require('path');
const express = require("express");
const app = express();
const morgan = require('morgan');
module.exports = app;

// Start of all middleware:

// logging middleware
app.use(morgan('dev'));

// body parsing middleware
app.use(express.json()) // in case we get a json request
app.use(express.urlencoded({ extended: false })) // make req.body to be available to us later

// api routes; requires automatically from index.js in the api-routes directory
app.use('/api-routes', require('./api-routes'));

// static file-serving middleware
// This matches any url for a GET request to a possible file in the public directory.
app.use(express.static(path.join(__dirname, '..', 'public')));

// error handling endware
app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});