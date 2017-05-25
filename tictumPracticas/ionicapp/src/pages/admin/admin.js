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
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { TableusersPage } from "../tableusers/tableusers";
import { UserformPage } from "../userform/userform";
import { TablerolesPage } from "../tableroles/tableroles";
import { HomePage } from "../home/home";
import { LocationPage } from "../location/location";
var AdminPage = (function () {
    function AdminPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    AdminPage.prototype.onClickUsers = function () {
        this.navCtrl.push(TableusersPage);
    };
    AdminPage.prototype.onClickRoles = function () {
        this.navCtrl.push(TablerolesPage);
    };
    AdminPage.prototype.onClickAddUser = function () {
        this.navCtrl.push(UserformPage);
    };
    AdminPage.prototype.onClickLocation = function () {
        this.navCtrl.push(LocationPage);
    };
    AdminPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Salir',
            message: '¿Estas seguro de cerrar sesion?',
            buttons: [
                {
                    text: 'Si',
                    handler: function () {
                        _this.logout();
                    }
                },
                {
                    text: 'No'
                }
            ]
        });
        confirm.present();
    };
    AdminPage.prototype.logout = function () {
        localStorage.clear();
        this.navCtrl.setRoot(HomePage);
    };
    return AdminPage;
}());
AdminPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-admin',
        templateUrl: 'admin.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, AlertController])
], AdminPage);
export { AdminPage };
//# sourceMappingURL=admin.js.map