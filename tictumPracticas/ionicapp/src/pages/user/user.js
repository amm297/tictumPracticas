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
import { Geolocation } from '@ionic-native/geolocation';
import { HomePage } from "../home/home";
import { HollidaysPage } from "../hollidays/hollidays";
import { NewPositionPage } from '../new-position/new-position';
import { User } from "../../models/user";
var UserPage = (function () {
    function UserPage(navCtrl, geolocation, navParams) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.navParams = navParams;
        this.user = new User();
        this.coords = {
            lat: 0,
            lng: 0
        };
        this.user = this.navParams.get("user");
        console.log(this.user);
        this.getPosicion();
    }
    //Esperanza
    //FUNCIONA
    //Al iniciar sesión, recogemos las coordenadas de su localización.
    UserPage.prototype.getPosicion = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (res) {
            _this.coords.lat = res.coords.latitude;
            _this.coords.lng = res.coords.longitude;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    //HASTA AQUÍ FUNCIONA OK
    UserPage.prototype.checkIn = function () {
        this.navCtrl.push(NewPositionPage, {
            user: this.user,
            lat: this.coords.lat,
            lng: this.coords.lng
        });
    };
    //Esperanza
    UserPage.prototype.onClickCalendario = function () {
        this.navCtrl.push(HollidaysPage, { user: this.user });
    };
    UserPage.prototype.logout = function () {
        localStorage.clear();
        this.navCtrl.setRoot(HomePage);
    };
    return UserPage;
}());
UserPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-user',
        templateUrl: 'user.html',
    }),
    __metadata("design:paramtypes", [NavController,
        Geolocation,
        NavParams])
], UserPage);
export { UserPage };
//# sourceMappingURL=user.js.map