require('./api/data/db.js');
var express = require('express');
var routes = require('./api/routes/routes.js');
var bodyParser = require('body-parser');
var app = express();

app.use(function(req, res, next){
  console.log(req.method, req.url);
  next();//moves on to next middleware
});
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
/*-------------routes middleware-------------------------*/
//looks into any routes in routes.js,
//looks for any routes starting with /
//we can also force it to look at /api only
app.use('/', routes);
/*-------------------------------------------------------*/

app.set('port', 3000);
app.listen(app.get('port'), function(){
  console.log('server is listening on port 3000');
});

module.exports.root = __dirname;//export the root path
