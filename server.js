const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // allows to take requests and get data from body
// note syntax above is same as: import express from 'express'
// need to add type:module in pacakage.json 
 

const app = express(); // initialize express into a variable

// bodyparser middleware
app.use(bodyParser.json());

// need a mongoDB URI to connect to
// We put the URI in the config folder for best practice sake
// we only need the mongoURI element from the keys.js
const db = require('./config/keys.js').mongoURI;

// Connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('mongoDB connected.'))
    .catch((err) => console.log(err));


const items = require('./routes/api/items.js'); // import statement equivalent in es6
// use routes. Anything that goes to api/items should refer to the items variable, which contains the routes. 
// the url to use is api/items
app.use('/api/items',items);

const port = process.env.PORT || 5000; // use either the port in environmental variable or port 5000

// listen on the port
app.listen(port, () => console.log(`Server started on port ${port}`)); 