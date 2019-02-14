const express = require('express');
const router = express.Router();
const Fruits = require('../models/fruit');

// This is the index route to show all the fruits
router.get('/', function(req, res) {
    res.send('Here are all the fruits')
});