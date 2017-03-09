//require express and body-parser
var express = require('express'),
  bodyParser = require('body-parser');

//links + connects to controllers(functions)
var controllers = require('./controllers');

// // connect to db models
// var db = require('./model');

// generate an express app and call it 'app'
var app = express();
  db = require('./models');

// serve static files in public
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

//***ROUTES***

//routes to the api controllers
app.get('/api', controllers.api.index);

//define a root route: localhost:3000/
app.get('/', function(req, res) {
    res.sendFile('views/index.html', {
        root: __dirname
    });
});






app.listen(process.env.PORT || 3000, function() {
    console.log('Ready to listen to your music at http://localhost:3000/?');
});
