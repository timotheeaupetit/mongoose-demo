const express = require('express');
const router = express.Router();

const Author = require('../models/Author');
const author = new Author('demo', 'authors');

router.route("/")
    .get((req, res) => author.getAll(res));

module.exports = router;
