const express = require('express');
const router = express.Router();

const Publication = require('../models/Publication');
const publication = new Publication('demo', 'publications');

router.route("/")
    .get((req, res) => publication.getAll(res));

module.exports = router;
