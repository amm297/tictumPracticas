var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
var Users = (function () {
    function Users(http) {
        this.http = http;
        //server = 'http://192.168.5.26:8080';
        //server = 'http://172.16.112.40:8080';
        //server = 'http://192.168.5.35:8080';
        //server = 'http://172.16.112.163:8080';
        this.server = 'http://localhost:8080';
    }
    Users.prototype.registerUser = function (data) {
        var _this = this;
        console.log(data.dni);
        return new Promise(function (resolve) {
            var headers = new Headers();
            headers.append('Content-Type', 'application/json');
            _this.http.post(_this.server + '/api/users/create', JSON.stringify(data), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                resolve(data);
            });
        });
    };
    Users.prototype.loginUser = function (data) {
        var _this = this;
        console.log(this.server);
        return new Promise(function (resolve) {
            var headers = new Headers();
            headers.append('Content-Type', 'application/json');
            _this.http.post(_this.server + '/api/users/login', JSON.stringify(data), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Users.prototype.logoutUser = function (data) {
        localStorage.clear();
    };
    /*-- Roberto --*/
    Users.prototype.addHollidays = function (data) {
        var _this = this;
        console.log(data);
        return new Promise(function (resolve) {
            var headers = new Headers();
            headers.append('Content-Type', 'application/json');
            _this.http.put(_this.server + '/api/users/addhollidays', JSON.stringify(data), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Users.prototype.addPersonalDays = function (data) {
        var _this = this;
        console.log(data);
        return new Promise(function (resolve) {
            var headers = new Headers();
            headers.append('Content-Type', 'application/json');
            _this.http.put(_this.server + '/api/users/addPersonalDays', JSON.stringify(data), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    /*-- Roberto --*/
    /*-- Esperanza --*/
    /*Función para generar contraseña AUTOMÁTICA*/
    Users.prototype.newPasswdAuto = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new Headers();
            headers.append('Content-Type', 'application/json');
            _this.http.put(_this.server + '/api/users/autopassw', JSON.stringify(data), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    /*Funcion para cambiar la contraseña, comprobamos que el email/dni existe en la base de datos y después le añadimos la nueva contraseña.*/
    Users.prototype.newPassword = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new Headers();
            headers.append('Content-Type', 'application/json');
            _this.http.put(_this.server + '/api/users/resetpassw', JSON.stringify(data), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Users.prototype.newCheck = function (data) {
        var _this = this;
        console.log("HOla");
        return new Promise(function (resolve) {
            var headers = new Headers();
            console.log("buenas...");
            headers.append('Content-Type', 'application/json');
            _this.http.put(_this.server + '/api/users/check', JSON.stringify(data), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    //Esperanza
    Users.prototype.getAllUsers = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new Headers();
            headers.append('Content-Type', 'application/json');
            _this.http.get(_this.server + '/api/users/read', { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Users.prototype.deleteUser = function (deleteUserId) {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new Headers();
            headers.append('Content-Type', 'application/json');
            _this.http.delete(_this.server + '/api/users/delete?_id=' + deleteUserId, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Users.prototype.modifyUser = function (user) {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new Headers();
            headers.append('Content-Type', 'application/json');
            _this.http.put(_this.server + '/api/users/update', user, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    return Users;
}());
Users = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], Users);
export { Users };
//# sourceMappingURL=users.js.map