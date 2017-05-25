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
var Roles = (function () {
    function Roles(http) {
        this.http = http;
        //server = 'http://192.168.5.26:8080';
        //server = 'http://172.16.112.40:8080';
        this.server = 'http://localhost:8080';
        this.data = null;
    }
    Roles.prototype.getAllRoles = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new Headers();
            headers.append('Content-Type', 'application/json');
            _this.http.get(_this.server + '/api/roles/read', { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Roles.prototype.removeRole = function (role) {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new Headers();
            headers.append('Content-Type', 'application/json');
            _this.http.delete(_this.server + '/api/roles/delete?_id=' + role._id, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                resolve(data);
            });
        });
    };
    Roles.prototype.addRole = function (role) {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new Headers();
            headers.append('Content-Type', 'application/json');
            _this.http.post(_this.server + '/api/roles/create', JSON.stringify(role), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Roles.prototype.updateRole = function (role) {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new Headers();
            headers.append('Content-Type', 'application/json');
            _this.http.put(_this.server + '/api/roles/update', JSON.stringify(role), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    return Roles;
}());
Roles = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], Roles);
export { Roles };
//# sourceMappingURL=roles.js.map