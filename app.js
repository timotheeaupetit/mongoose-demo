const express = require('express'),
    app = express(),
    port = process.argv[2] || 3000;

const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Routes
const userRouter = require('./routes/userRouter');
// const publicationRouter = require('./routes/publicationRouter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Configure response headers
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, X-API-KEY, Content-Type, Accept");
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

// Bind routes with routers
app.use('/users', userRouter);
// app.use('/publications', publicationRouter);

mongoose.set('debug', true);

// Launch server
app.listen(port, () => console.log(`TEST Server running at http://127.0.0.1:${port}`));
