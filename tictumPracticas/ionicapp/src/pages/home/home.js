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
import { NavController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { User } from '../../models/user';
import { Users } from "../../providers/users";
import { AdminPage } from "../admin/admin";
import { UserPage } from "../user/user";
import { ResetPassword } from "../reset-password/reset-password";
import { GenericPasswordPage } from "../generic-password/generic-password";
import { TranslateService } from "@ngx-translate/core";
var HomePage = (function () {
    function HomePage(navCtrl, formBuilder, alertCtrl, usersService, translateService) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.usersService = usersService;
        this.translateService = translateService;
        this.user = {
            input: '',
            password: ''
        };
        //console.log('Paso constructor');
        this.user.input = localStorage.getItem("email");
        this.user.password = localStorage.getItem("pwd");
        this.loginForm = formBuilder.group({
            input: ['', Validators.required],
            password: ['', Validators.required],
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.userLogin();
    };
    HomePage.prototype.userLogin = function () {
        var _this = this;
        console.log("Comprobando Login" + this.loginForm.valid);
        if (this.loginForm.valid) {
            if (this.user.input.includes('@')) {
                this.user.input = this.user.input.toLowerCase();
            }
            this.usersService.loginUser(this.user).then(function (data) {
                if (data.hasOwnProperty('errmsg')) {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Oops!',
                        subTitle: data['errmsg'],
                        buttons: ['Ok']
                    });
                    alert_1.present();
                }
                else {
                    console.log("Login OK");
                    console.log(_this.navCtrl.last().component.name);
                    var logUser = new User(data);
                    if (_this.remember) {
                        localStorage.setItem("email", logUser.email);
                        localStorage.setItem("pwd", logUser.password);
                    }
                    if (logUser.password == "1234cambio")
                        _this.navCtrl.setRoot(ResetPassword, { user: logUser });
                    else {
                        if (logUser.isAdmin())
                            _this.navCtrl.setRoot(AdminPage);
                        else
                            _this.navCtrl.push(UserPage);
                    }
                }
                console.log(data);
            });
        }
    };
    HomePage.prototype.goToResetPassword = function () {
        console.log("Cambiar contraseña del email " + this.user.input);
        this.navCtrl.setRoot(GenericPasswordPage, this.user.input);
    };
    HomePage.prototype.onLanguage = function (event) {
        switch (event.value) {
            case 'spa':
                this.translateService.use('spa');
                break;
            case 'eng':
                this.translateService.use('eng');
                break;
        }
    };
    return HomePage;
}());
HomePage = __decorate([
    Component({
        selector: 'home-page',
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [NavController,
        FormBuilder,
        AlertController,
        Users,
        TranslateService])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map