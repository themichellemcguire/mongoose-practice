// This is where we require everything
const express = require('express');
const app = express();
require('./db/db');

app.get('/', function(req, res) {
    res.send("Howdy, Y'all!")
})

app.listen(3000, function () {
    console.log('Server is on port 3000')
})