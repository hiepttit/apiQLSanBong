var express = require('express');
var app = express();
var port=process.env.PORT || 5000;
let routes = require('./api/routes/routes') //importing route
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(require('body-parser').urlencoded({extended: false}));
app.use(require('body-parser').json());
app.use(express.static('public'));
routes(app);


app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});
app.listen(port, function () {
  console.log('Server is running....');
});