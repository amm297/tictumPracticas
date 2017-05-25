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
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { HomePage } from "../home/home";
import { Users } from "../../providers/users";
import { DniValidator } from '../userform/dniValidator';
/**
 * Generated class for the GenericPasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var GenericPasswordPage = (function () {
    function GenericPasswordPage(navCtrl, formBuilder, alertCtrl, usersService) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.usersService = usersService;
        this.user = {
            email: '',
            dni: ''
        };
        this.genericPasswForm = formBuilder.group({
            email: ['', Validators.compose([Validators.minLength(8), Validators.email, Validators.required])],
            dni: ['', Validators.compose([Validators.required, DniValidator.isValid, DniValidator.hasValidFormat])]
        });
    }
    GenericPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GenericPasswordPage');
    };
    GenericPasswordPage.prototype.genericPassword = function () {
        var _this = this;
        console.log("Cambiando a la contraseña genérica");
        if (this.genericPasswForm.valid) {
            var userData = {
                email: this.user.email,
                dni: this.user.dni
            };
            this.usersService.newPasswdAuto(userData).then(function (data) {
                /*Creamos una contraseña genérica para cada usuario*/
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
                        buttons: ['Accept']
                    });
                    alert_2.present();
                    _this.navCtrl.setRoot(HomePage);
                }
                ;
            });
        }
        ;
    };
    return GenericPasswordPage;
}());
GenericPasswordPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-generic-password',
        templateUrl: 'generic-password.html',
    }),
    __metadata("design:paramtypes", [NavController, FormBuilder, AlertController, Users])
], GenericPasswordPage);
export { GenericPasswordPage };
//# sourceMappingURL=generic-password.js.map