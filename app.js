var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/bookAPI');
var Book = require('./models/bookModel');
var app = express();
var port = process.env.PORT || 3100;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

bookRouter = require('./Routes/bookRoutes')(Book);

app.use('/api/Books', bookRouter);


app.get('/', function (req, res) {
    res.send('Api setup done');
});

app.listen(port, function () {
    console.log('we are up on' + port);
});