var express = require('express');
var app = express();
var port=process.env.PORT || 5000;
let routes = require('./api/routes') //importing route
app.use(require('body-parser').urlencoded({extended: false}));
app.use(require('body-parser').json());
routes(app)

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

app.listen(port, function () {
  console.log('Server is running....');
});