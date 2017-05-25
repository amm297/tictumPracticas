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
import { Users } from "../../providers/users";
import { UserformPage } from '../userform/userform';
var TableusersPage = (function () {
    function TableusersPage(navCtrl, navParams, usersService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usersService = usersService;
        this.alertCtrl = alertCtrl;
    }
    TableusersPage.prototype.ngOnInit = function () {
        var _this = this;
        this.usersService.getAllUsers().then(function (data) {
            _this.users = data;
            _this.search = _this.users;
            console.log(_this.users);
        });
    };
    TableusersPage.prototype.deleteUser = function (userId, index) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Cuidado!',
            message: '¿Estas seguro de eliminar el usuario?',
            buttons: [
                {
                    text: 'Si',
                    handler: function () {
                        _this.usersService.deleteUser(userId);
                        _this.users.splice(index, 1);
                    }
                },
                {
                    text: 'No'
                }
            ]
        });
        confirm.present();
    };
    TableusersPage.prototype.modifyUser = function (user) {
        this.navCtrl.push(UserformPage, { user: user });
    };
    TableusersPage.prototype.onInput = function (event) {
        var input = event.target.value;
        if (input && input.trim() != '') {
            this.search = this.users.filter(function (user) {
                return (user.name.toLowerCase().indexOf(input.toLowerCase()) != -1 ||
                    user.dni.indexOf(input) > -1 ||
                    user.email.toLowerCase().indexOf(input.toLowerCase()) > -1 ||
                    user.role.toLowerCase().indexOf(input.toLowerCase()) > -1);
            });
        }
        else {
            this.search = this.users;
        }
    };
    //Display users
    TableusersPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    TableusersPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    return TableusersPage;
}());
TableusersPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-tableusers',
        templateUrl: 'tableusers.html',
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        Users,
        AlertController])
], TableusersPage);
export { TableusersPage };
//# sourceMappingURL=tableusers.js.map