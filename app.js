var http = require('http');
var express = require('express'),
    app = module.exports.app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var ejs = require('ejs');
var app = express();
app.use(require("morgan")("dev"));


app.engine('.ejs', ejs.__express);
app.set('views', __dirname+'/view');

app.use(cookieParser())
app.use(bodyParser.json({limit: '50mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))


const db = require('./services/mongodb.js')();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(express.static(__dirname+'/public'))

app.use("/", require('./routes/index.js'))
app.use("/help", require('./routes/help.js'))
app.use("/problem", require('./routes/problem.js'))
app.use("/offer", require('./routes/offer.js'))



var server = http.createServer(app);
server.listen(80);