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
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { User } from "../../models/user";
import { Users } from "../../providers/users";
import { PasswordValidator } from './passwordValidator';
import { DniValidator } from './dniValidator';
import { Roles } from "../../providers/roles";
var UserformPage = (function () {
    function UserformPage(navCtrl, navParams, usersService, rolesService, formBuilder, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usersService = usersService;
        this.rolesService = rolesService;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.user = new User();
        this.btnValue = "Registrar usuario";
        this.edit = false;
        if (this.navParams.get('user')) {
            this.user = this.navParams.get('user');
            this.btnValue = "Editar usuario";
            this.edit = true;
        }
        this.userForm = formBuilder.group({
            name: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
            lastname: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
            dni: ['', Validators.compose([Validators.required, DniValidator.isValid, DniValidator.hasValidFormat])],
            address: ['', Validators.required],
            country: ['', Validators.required],
            phone: ['', Validators.compose([Validators.minLength(8), Validators.pattern('[0-9()+-]*'), Validators.required])],
            email: ['', Validators.compose([Validators.minLength(8), Validators.email, Validators.required])],
            password: ['', Validators.compose([Validators.minLength(8), Validators.required])],
            confirmpassword: ['', PasswordValidator.isEqual],
            role: ['', Validators.required]
        });
    }
    UserformPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.rolesService.getAllRoles().then(function (data) {
            _this.roles = data;
        });
    };
    UserformPage.prototype.registerUser = function () {
        var _this = this;
        if (this.userForm.valid) {
            if (this.edit) {
                this.usersService.modifyUser(this.user).then(function (data) {
                    if (!data.hasOwnProperty('errmsg'))
                        _this.navCtrl.pop();
                });
            }
            else {
                this.usersService.registerUser(this.user).then(function (data) {
                    if (data.hasOwnProperty('errmsg')) {
                        var msg = '';
                        if (data['errmsg'].indexOf('dni') > 0)
                            msg = "DNI ya en uso: " + _this.user.dni;
                        else
                            msg = "Email ya en uso: " + _this.user.email;
                        var alert_1 = _this.alertCtrl.create({
                            title: 'Oops!',
                            subTitle: msg,
                            buttons: ['Ok']
                        });
                        alert_1.present();
                    }
                    else {
                        _this.navCtrl.pop();
                    }
                });
            }
        }
        else {
            console.log("Formulario incorrecto!");
        }
    };
    return UserformPage;
}());
UserformPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-userform',
        templateUrl: 'userform.html',
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        Users,
        Roles,
        FormBuilder,
        AlertController])
], UserformPage);
export { UserformPage };
//# sourceMappingURL=userform.js.map