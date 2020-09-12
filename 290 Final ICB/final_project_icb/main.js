var express = require('express');

var bodyParser = require('body-parser');

var app = express();
//var exphbs = require('express-handlebars').create({defaultLayout: 'main'});
var handlebars = require('express-handlebars').create({defaultLayout: "main"});
//app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars.engine);

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(express.static('views/pics'));
app.use(express.static(__dirname, + '/views'));

app.set('port', 7178);


//app.get('/', (req, res) => {
//  console.log('hello world');
//  res.send('I see you');
//});

app.get('/', (req,res) =>{
  console.log("home page working");
  res.render('home.handlebars'); 
});

app.get('/page2', (req,res) => {
  console.log("page2 working");
  res.render('page2.handlebars'); 
});

app.get('/page3', (req,res) =>{
  console.log("page3 working");
  res.render('page3.handlebars'); 
});

app.get('/page4',(req,res) => {
  console.log("page4 working");
  res.render('page4.handlebars'); 
});



app.use(function(req,res){
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
  console.log(
      `Express started on http://${process.env.HOSTNAME}:${app.get('port')}; press Ctrl-C to terminate.`);
});