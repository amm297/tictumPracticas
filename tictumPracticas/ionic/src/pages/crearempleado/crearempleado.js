var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//Añadimos el servicio.
import { Empleado } from '../../providers/empleado';
/**
 * Generated class for the CrearEmpleado page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CrearEmpleado = (function () {
    function CrearEmpleado(navCtrl, navParams, empleado) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.empleado = empleado;
    }
    CrearEmpleado.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CrearEmpleado');
    };
    CrearEmpleado.prototype.crearempleado = function () {
        var empleado = {
            name: this.name,
            lastname: this.lastname,
            email: this.email,
            password: this.password,
            role: this.role,
            dni: this.dni,
            address: this.address,
            country: this.country,
            phone: this.phone,
        };
        this.empleado.crearempleado(empleado);
    };
    return CrearEmpleado;
}());
CrearEmpleado = __decorate([
    IonicPage(),
    Component({
        selector: 'page-crearempleado',
        templateUrl: 'crearempleado.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, Empleado])
], CrearEmpleado);
export { CrearEmpleado };
//# sourceMappingURL=crearempleado.js.map