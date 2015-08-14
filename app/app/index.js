var express = require('express');
var nunjucks = require('nunjucks');
var app = express();

nunjucks.configure({ autoescape: true, express: app });
app.set('views', __dirname);
app.set('view engine', 'nunjucks');

//See the README about ordering of middleware
//Load the routes ('controllers' -ish)
app.use(require('./site/router'));
app.use('/api', require('./readings/router'));

//FINALLY, use any error handlers
app.use(require('./errors/notFound'));

// Export the app instance for unit testing via supertest
module.exports = app;
