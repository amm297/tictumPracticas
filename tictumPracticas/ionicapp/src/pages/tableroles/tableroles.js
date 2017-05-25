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
import { Roles } from '../../providers/roles';
var TablerolesPage = (function () {
    function TablerolesPage(navCtrl, navParams, rolesService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rolesService = rolesService;
        this.displayInput = false;
        this.displayButton = '';
        this.role = { rolename: '' };
    }
    TablerolesPage.prototype.ngOnInit = function () {
        this.getAllRoles();
    };
    TablerolesPage.prototype.getAllRoles = function () {
        var _this = this;
        this.rolesService.getAllRoles().then(function (data) {
            _this.roles = data;
            _this.search = _this.roles;
        });
    };
    TablerolesPage.prototype.showInput = function () {
        this.displayButton = 'add';
        this.displayInput = true;
    };
    TablerolesPage.prototype.closeInput = function () {
        this.role.rolename = '';
        this.displayInput = false;
        this.getAllRoles();
    };
    TablerolesPage.prototype.addRole = function () {
        var _this = this;
        if (this.role.rolename !== '') {
            this.rolesService.addRole(this.role).then(function () {
                _this.closeInput();
                _this.role.rolename = '';
                _this.getAllRoles();
            });
        }
    };
    TablerolesPage.prototype.editRole = function (role) {
        this.role = role;
        this.displayButton = 'edit';
        this.displayInput = true;
    };
    TablerolesPage.prototype.updateRole = function () {
        var _this = this;
        if (this.role.rolename !== '') {
            this.rolesService.updateRole(this.role).then(function () {
                _this.closeInput();
                _this.role.rolename = '';
                _this.getAllRoles();
            });
        }
    };
    TablerolesPage.prototype.deleteRole = function (role) {
        var _this = this;
        this.rolesService.removeRole(role).then(function () {
            _this.getAllRoles();
        });
    };
    TablerolesPage.prototype.onInput = function (event) {
        var input = event.target.value;
        if (input && input.trim() != '') {
            this.search = this.roles.filter(function (role) {
                return (role.rolename.toLowerCase().indexOf(input.toLowerCase()) > -1);
            });
        }
        else {
            this.search = this.roles;
        }
    };
    return TablerolesPage;
}());
TablerolesPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-tableroles',
        templateUrl: 'tableroles.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, Roles])
], TablerolesPage);
export { TablerolesPage };
//# sourceMappingURL=tableroles.js.map