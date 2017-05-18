// Set up
var express  = require('express');
var app      = express();                               // create our app w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var cors = require('cors');
 
// Configuration
mongoose.connect('mongodb://192.168.5.26:27017/tictum');
 
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(cors());
 
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});
 




// Models
var Empleado = mongoose.model('User', {
    dni: String,
    name: String,
    address: String,
    country: String,
    phone: Number,
    email: String,
    password: String,
    role: String,
    lastname: String
});
 
// Routes
    // Crear un nuevo empleado.
    // create review and send back all reviews after creation
    app.post('/api/empleado', function(req, res) {
        console.log("Creando un nuevo empleado");
        // create a review, information comes from request from Ionic
        Empleado.create(req.body, function(err, post) {
            if (err)
                res.send(err);
            res.json(post);
        });
    });
 
    // delete a review
    app.get('/api/empleado', function(req, res) {
        Empleado.find((err, post)=>{
            if (err)
                res.send(err);
            res.json(post);
        });
    });
 
 
// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");