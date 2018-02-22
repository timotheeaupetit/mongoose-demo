const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const User = require('../models/User');
const user = new User(mongoose);

router.route('/:id')
    .get(function(req, res) {
        user.get(req.params.id, res)
    })
    .put(function (req, res) {
        user.update(req.params.id, req.body, res)
    })
    .delete(function(req, res) {
        user.delete(req.params.id, res)
    });

router.route('/')
    .all(function (req, res, next) {
        next();
    })
    .get(function(req, res) {
        user.getAll(res);
    })
    .post(function (req, res) {
        user.insert(req.body, res)
    });

module.exports = router;
