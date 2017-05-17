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
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the Empleado provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Empleado = (function () {
    function Empleado(http) {
        this.http = http;
        console.log('Hello Empleado Provider');
    }
    Empleado.prototype.crearempleado = function (empleado) {
        this.http.post('http://localhost:8080/api/users/create', empleado)
            .subscribe(function (res) {
            console.log(res.json());
        });
    };
    Empleado.prototype.verUsers = function (empleado) {
        this.http.get('http://localhost:8080/api/users/read', empleado)
            .subscribe(function (res) {
            console.log(res.json());
        });
    };
    Empleado.prototype.editUser = function (empleado) {
        this.http.put('http://localhost:8080/api/users/update', empleado)
            .subscribe(function (res) {
            console.log(res.json());
        });
    };
    Empleado.prototype.deleteUser = function (empleado) {
        this.http.delete('http://localhost:8080/api/users/delete', empleado)
            .subscribe(function (res) {
            console.log(res.json());
        });
    };
    return Empleado;
}());
Empleado = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], Empleado);
export { Empleado };
//# sourceMappingURL=empleado.js.map