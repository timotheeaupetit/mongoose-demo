const express = require('express');
const router = express.Router();

const User = require('../models/User');
const user = new User('test', 'users');

router.route('/:id')
    .get((req, res) => user.get(req.params.id, res))
    .put((req, res) => user.update(req.params.id, req.body, res))
    .delete((req, res) => user.delete(req.params.id, res));

router.route('/')
    .get((req, res) => user.getAll(res))
    .post((req, res) => user.insert(req.body, res));

module.exports = router;
