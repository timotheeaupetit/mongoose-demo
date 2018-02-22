const express = require('express'),
    app = express();

const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Routes
const userRouter = require('./routes/userRouter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', userRouter);

mongoose.connect('mongodb://localhost:27017/test');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected to database!')
});

mongoose.set('debug', true);

module.exports = app;
