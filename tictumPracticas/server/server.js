/*Set up*/var express = require('express');var app = express();var mongoose = require('mongoose');var mongoosePaginate = require('mongoose-paginate');var logger = require('morgan');var bodyParser = require('body-parser');var cors = require('cors');mongoose.Promise = global.Promise;/* Bcrypt */var bcrypt = require('bcrypt');var BCRYPT_SALT_ROUNDS = 10;/* Configuration*/mongoose.connect('mongodb://localhost/tictum');app.use(bodyParser.urlencoded({extended: false}));/* Parses urlencoded bodies*/app.use(bodyParser.json());/* Send JSON responses*/app.use(cors());/*Models*/var userSchema = new mongoose.Schema({   name: String,    lastname: String,    email: String,    password: String,    role: String,    dni: String,    address: String,    city: String,    stateprovince: String,    country: String,    phone: String,    hollidays:[],    personalDays:[],    checking:[],    daysp:Number,    daysh:Number});userSchema.plugin(mongoosePaginate);var User = mongoose.model('User', userSchema);var Role = mongoose.model('Role', {rolename: String});/*User API*///Crear un nuevo usuarioapp.post('/api/users/create', function (req, res) {    var user = new User(req.body);    bcrypt.hash(user.password, BCRYPT_SALT_ROUNDS)        .then(function(hashedPassword) {            user.password = hashedPassword;        })        .then(function() {            return user.save(function (err, addedUser) {            if (err) {                res.send(err);            }            res.send(addedUser);        });    });});//Leer usuariosapp.get('/api/users/read', function (req, res) {    User.find({},function (err, users) {        if (err) {            res.send(err);        }        res.send(users);    });});//Leer los usuraios paginadosapp.get('/api/users/readPage', function (req, res) {    User.paginate({}, {page: req.query.page, limit: 10}, function (err, users) {        if (err) {            res.send(err);        }        res.send(users);    });});//Leer un usuario por idapp.get('/api/users/readbyId/:id', function (req, res, next) {    User.findById(req.params.id, function (err, user) {        if (err) {            res.send(err);        }        res.send(user);    });});//leer un usuario por emailapp.get('/api/users/readbyEmail/:email', function (req, res, next) {    User.find({email: req.params.email}, function (err, user) {        if (err) {            res.send(err);        }        res.send(user);    });});//leer un uaurio por dniapp.get('/api/users/readbyDNI/:dni', function (req, res, next) {    User.find({dni: req.params.dni}, function (err, user) {        if (err) {            res.send(err);        }        res.send(user);    });});//modificar un usuarioapp.put('/api/users/update', function (req, res) {    User.findById(req.body._id, function (err, user) {        if (err) {            res.status(500).send(err);        } else {            user.name = req.body.name || user.name;            user.lastname = req.body.lastname || user.lastname;            user.email = req.body.email || user.email;            user.role = req.body.role || user.role;            user.dni = req.body.dni || user.dni;            user.address = req.body.address || user.address;            user.city = req.body.city || user.city;            user.stateprovince = req.body.stateprovince || user.stateprovince;            user.country = req.body.country || user.country;            user.phone = req.body.phone || user.phone;            user.save(function (err, user) {                if (err) {                    res.send({errmsg:" DNI o email coincidente con otro usuario"});                }                res.send(user);        });        }    });});//Borrar un usuarioapp.delete('/api/users/delete', function (req, res) {    console.log(req.query);    User.findByIdAndRemove(req.query._id, function (err, user) {        var response = {message: "User deleted", _id: user._id};        res.send(response);    });});//login de usuarioapp.post('/api/users/login', function (req, res) {    console.log(req.body);    query = {};    if (req.body.input.length > 9) query = {email: req.body.input}; else query = {dni: req.body.input};    User.findOne(query, function (err, user) {        if (err) {            res.send(err);        }        if (!user) {            res.send({errmsg: "Email o dni no existe"});        } else if (!bcrypt.compareSync(req.body.password, user.password)) {            res.send({errmsg: "Password no valido"});        } else {           if (req.body.password == "a07a0029266cd00cac87ab5f41cf35b3" && bcrypt.compareSync(req.body.password, user.password) == true){                res.send({                    user,                    changePassw:"Customize your password",                    autoP:true                });            } else {                res.send(user);            }        }    });});    //Gestion de vacaciones//añadir periodo de vacaciones a un usuarioapp.put('/api/users/addhollidays', function(req, res){    User.findById(req.body._id, function (err, user) {        if (err) {            res.status(500).send(err);        } else {            console.log(req.body.hollidays)            user.hollidays = req.body.hollidays || user.hollidays;                user.save(function (err, user) {                if (err) {                    res.status(500).send(err)                }                res.send(user);            });        }    });});//añadir dias de asuntos propios a un usuarioapp.put('/api/users/addPersonalDays', function(req, res){    User.findById(req.body._id, function (err, user) {        if (err) {            res.status(500).send(err);        } else {            if(user.daysp >0){                user.personalDays = req.body.personalDays || user.personalDays;                                    user.save(function (err, user) {                    if (err) {                        res.status(500).send(err)                    }                    res.send(user);                });            }else{                res.send({errmsg:"No te quedan dias de asuntos propios."});            }        }    });});/*Poner el usuario inactivo*/app.put('/api/users/changerole/:id',function(req,res){    console.log(req.params.id);    User.findById(req.params.id,function(err,user){        if(err) res.send(err);        if(!user) res.send({errmsg:"Usuario no valido"});        else{            user.role = req.body.role || user.role;            user.save(function(err,user){                if(err) res.send(err);                msg = 'Usuario ';                msg += (user.role == 'inactivo')? 'desactivado' : 'activado';                res.send({user,msgok: msg});            })        }    })})/*Reset password API*///Generar contraseña automáticaapp.put('/api/users/autopassw', function(req,res){    console.log(req.body);    var password = "a07a0029266cd00cac87ab5f41cf35b3";    User.findOne({ email:req.body.email,  dni:req.body.dni  }, function (err, user) {         if(err) res.send(err);        if(!user){            res.send({errmsg:"Email y DNI no coinciden"});        } else{            console.log("Creando contraseña genérica");            console.log(password);             bcrypt.hash(password, BCRYPT_SALT_ROUNDS)                .then(function(hashedPassword) {                    console.log("hash: " + hashedPassword);                    req.body.password = hashedPassword;                })                .then(function() {                    console.log("pwd: "+ req.body.password);                    user.password = req.body.password || user.password;                    user.save(function (err, user) {                        if (err) {                            res.status(500).send(err);                        }                        res.send({                            user,                            msgok:"Tu nueva contraseña es: 1234cambio"                     });                });            });        }    });});//cambiar contraseña de automática a personalizada.app.put('/api/users/resetpassw', function(req, res) {    console.log(req.body);    User.findOne({ email:req.body.email,  dni:req.body.dni  }, function (err, user) {         if(err) res.send(err);        if(!user){            res.send({errmsg:"Email y DNI no coinciden"});        }else if (req.body.oldpassword != null && !bcrypt.compareSync(req.body.oldpassword, user.password)){            res.send({errmsg: "Password no coincidente"});        }else {            bcrypt.hash(req.body.password, BCRYPT_SALT_ROUNDS)                .then(function(hashedPassword) {                    req.body.password = hashedPassword;                })                .then(function() {                    user.password = req.body.password || user.password;                    return user.save(function (err, user) {                        if (err) {                            res.status(500).send(err);                        }                        res.send({                            user,                            msgok:"Contraseña actualizada"                     });                });            });        }  });});app.put('/api/users/updateHollidays', function (req, res) {    var hollidays = req.body.hollidays;    User.findById(req.body._id, function (err, user) {        if (err) {            res.status(500).send(err);        } else {            user.hollidays = hollidays;            user.save(function (err, user) {                if (err) res.send(err)                res.send(user);            });        }    });});//modificar un rol existenteapp.put('/api/users/check/', function (req, res) {    User.findById(req.query._id,function(err,user){        if(err) res.send(err);        if(!user) res.send({errmsg: "Usuario no válido"});        else{            user.checking = req.body.checking || user.checking;            user.save(function(err,user){                if(err) res.send(err);                res.send(user);            });        }    })});//Coger usuarios por tipo de vacaciones/*Role API*///leer los rolesapp.get('/api/roles/read', function (req, res) {    Role.find({}, function (err, roles) {        if (err) {            res.send(err);        }        res.send(roles);    });});//leer role por idapp.get('/api/roles/readbyId/:id', function (req, res, next) {    Role.findById(req.params.id, function (err, role) {        if (err) {            res.send(err);        }        res.send(role);    });});//añadir un nuevo rolapp.post('/api/roles/create', function (req, res) {    var role = new Role(req.body);    role.save(function (err, addedRole) {        if (err) {            res.send(err);        }        res.send(addedRole);    });});//modificar un rol existenteapp.put('/api/roles/update', function (req, res) {    Role.findById(req.body._id, function (err, role) {        if (err) {            res.status(500).send(err);        } else {            role.rolename = req.body.rolename || role.rolename;            role.save(function (err, role) {                if (err) {                    res.status(500).send(err)                }                res.send(role);            });        }    });});//borrar un rolapp.delete('/api/roles/delete', function (req, res) {    console.log(req.query);    Role.findByIdAndRemove(req.query._id, function (err, role) {        var response = {message: "Role deleted", _id: role._id};        res.send(response);    });});/* listen*/app.listen(8080);console.log("App listening on port 8080");