var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    profile = require('./api/models/profile'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/TestDB');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/routes'); //importing route
routes(app); //register the route

//Adding a middleware
app.use(function(req, res) {
    res.status(404).send({message:'Cannot request URL '+ req.originalUrl + ' not found'})
});



app.listen(port);


console.log('todo list RESTful API server started on: ' + port);