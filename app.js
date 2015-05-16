var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var translateAPI = require('./controllers/translateAPI.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.post('/formSubmit', translateAPI.formSubmit);
var server = app.listen(5085, function() {
	console.log('Express server listening on port ' + server.address().port);
});
