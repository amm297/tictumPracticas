/**
 * Created by Aula08-17 on 28/04/2017.
 */
// Set up
var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

// Configuration
mongoose.connect('mongodb://127.0.0.1/tictum');

app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses
app.use(cors());

//Models
var User = mongoose.model('User',{
    name: String,
    lastname: String,
    email: String,
    password: String,
    role: String,
    dni: String,
    address: String,
    country: String,
    phone: String
});

var Role = mongoose.model('Role',{
    rolename: String
});

//User API
app.post('/api/users/create', function(req, res) {
    var user = new User(req.body);
    user.save(function(err,addedUser){
        if(err){
            res.send(err);
        }
        res.send(addedUser);
    });
});

app.get('/api/users/read', function(req, res) {
    User.find({},function(err,users){
        if(err){
            res.send(err);
        }
        res.send(users);
    });
});

app.put('/api/users/update', function(req, res) {
    User.findById(req.body._id, function (err, user) {  
    if (err) {
        res.status(500).send(err);
    } else {
        user.name = req.body.name || user.name;
        user.lastname = req.body.lastname || user.lastname;
        user.email = req.body.email || user.email;
        user.password = req.body.password || user.password;
        user.role = req.body.role || user.role;
        user.dni = req.body.dni || user.dni;
        user.address = req.body.address || user.address;
        user.country = req.body.country || user.country;
        user.phone = req.body.phone || user.phone;
        user.save(function (err, user) {
            if (err) {
                res.status(500).send(err)
            }
            res.send(user);
        });
    }
    });
});

app.delete('/api/users/delete', function(req, res) {
    console.log(req.query);
    User.findByIdAndRemove(req.query._id, function (err, user) {  
    var response = {
        message: "User deleted",
        _id: user._id
    };
    res.send(response);
    });
});

//Role API
app.get('/api/roles/read', function(req, res) {
    Role.find({},function(err,roles){
        if(err){
            res.send(err);
        }
        res.send(roles);
    });
});

app.post('/api/roles/create', function(req, res) {
    var role = new Role(req.body);
    role.save(function(err,addedRole){
        if(err){
            res.send(err);
        }
        res.send(addedRole);
    });
});

app.put('/api/roles/update', function(req, res) {
    User.findById(req.body._id, function (err, role) {  
    if (err) {
        res.status(500).send(err);
    } else {
        role.rolename = req.body.rolename || role.rolename;
        role.save(function (err, role) {
            if (err) {
                res.status(500).send(err)
            }
            res.send(role);
        });
    }
    });
});

app.delete('/api/roles/delete', function(req, res) {
    console.log(req.query);
    User.findByIdAndRemove(req.query._id, function (err, role) {  
    var response = {
        message: "Role deleted",
        _id: role._id
    };
    res.send(response);
    });
});

// listen
app.listen(8080);
console.log("App listening on port 8080");