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
import { HomePage } from "../home/home";
import { Users } from "../../providers/users";
import { PasswordValidator } from '../userform/passwordValidator';
/**
 * Generated class for the ResetPassword page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ResetPassword = (function () {
    function ResetPassword(navCtrl, navParams, formBuilder, alertCtrl, usersService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.usersService = usersService;
        this.user = {
            email: '',
            dni: '',
            password: ''
        };
        if (this.navParams.get('user')) {
            this.user.email = this.navParams.get('user').email;
            this.user.dni = this.navParams.get('user').dni;
        }
        this.resetPasswForm = formBuilder.group({
            password: ['', Validators.compose([Validators.minLength(8), Validators.required])],
            confirmpassword: ['', PasswordValidator.isEqual],
        });
    }
    ResetPassword.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResetPassword');
    };
    ResetPassword.prototype.resetPassword = function () {
        var _this = this;
        console.log("Changing password...");
        if (this.resetPasswForm.valid) {
            if (this.user.password == this.confirmpassword) {
                var cambio = {
                    email: this.user.email,
                    dni: this.user.dni,
                    password: this.user.password,
                };
                console.log(cambio);
                this.usersService.newPassword(cambio).then(function (data) {
                    /*Comprobamos que el cambio de contraseña se ha realizado correctamente, si no es así mostramos un error por pantalla.*/
                    if (data.hasOwnProperty('errmsg')) {
                        var alert_1 = _this.alertCtrl.create({
                            title: 'Error!',
                            subTitle: data['errmsg'],
                            buttons: ['Ok']
                        });
                        alert_1.present();
                    }
                    else {
                        var alert_2 = _this.alertCtrl.create({
                            title: 'OK!',
                            subTitle: data['msgok'],
                            buttons: ['Acept']
                        });
                        alert_2.present();
                        //Código para que despues de cambiar la contraseña se redireccione al Login de nuevo.
                        localStorage.setItem("email", _this.user.email);
                        localStorage.setItem("pwd", _this.user.password);
                        _this.navCtrl.setRoot(HomePage);
                    }
                });
            }
        }
        ;
    };
    return ResetPassword;
}());
ResetPassword = __decorate([
    IonicPage(),
    Component({
        selector: 'page-reset-password',
        templateUrl: 'reset-password.html'
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        FormBuilder,
        AlertController,
        Users])
], ResetPassword);
export { ResetPassword };
//# sourceMappingURL=reset-password.js.map