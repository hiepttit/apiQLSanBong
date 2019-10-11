var express = require('express');
var app = express();

let routes = require('./api/routes') //importing route
routes(app)

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

app.listen(5000, function () {
  console.log('Server is running..');
});