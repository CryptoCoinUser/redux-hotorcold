var express  = require('express');
var app      = express();
// port     = process.env.PORT || 8080;
var bodyParser   = require('body-parser');
app.use(bodyParser.json());
const path   = require('path');

// set the view engine
app.set('view engine', 'html');
// set the public directory
app.use(express.static(path.join(__dirname, 'build')));

let fewestGuessesSoFar = 99;

app.get('/fewestGuesses', (req, res) => {
	res.json(fewestGuessesSoFar)
})

app.post('/fewestGuesses', (req, res) => {
	fewestGuessesSoFar = req.body.numberOfGuesses;
	res.json(fewestGuessesSoFar);
})


app.use('*', (req, res) => {
	res.render('index.html');
})


app.listen(3000, () => {
	console.log('listening on 3000')
}) 