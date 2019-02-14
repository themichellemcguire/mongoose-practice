// This is where we require everything
const express = require('express');
const app = express();
const fruitsRouter = require('./controllers/fruits');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

require('./db/db');

// set up body parser middlewar
//  This allows us to use th data in req.body in a meaningful way
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(methodOverride('_method'));


// Here's where we'll forward alternate routes
app.use('/fruits', fruitsRouter);

// Set the view "template" Engine
app.set('view engine', 'ejs');

// This is how we're handling requests to the requests route
app.get('/', function(req, res) {
    res.send("Howdy, Y'all!")
})

app.listen(3000, function () {
    console.log('Server is on port 3000')
})