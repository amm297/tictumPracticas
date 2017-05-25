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
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Users } from "../../providers/users";
import { User } from "../../models/user";
/**
 * Generated class for the NewPositionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var NewPositionPage = (function () {
    function NewPositionPage(navCtrl, navParams, viewCtrl, usersService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.usersService = usersService;
        this.user = new User();
        this.checkin = {
            entry: String,
            exit: String,
            geolocation: {
                lat: Number,
                lng: Number
            }
        };
        this.description = '';
        this.user = this.navParams.get("user");
        this.checkin.geolocation.lat = this.navParams.get('lat');
        this.checkin.geolocation.lng = this.navParams.get('lng');
        this.getAddress(this.checkin.geolocation).then(function (results) {
            _this.address = results[0]['formatted_address'];
        }, function (errStatus) {
            // Aquí iría el código para manejar el error
        });
    }
    NewPositionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewPositionPage');
    };
    NewPositionPage.prototype.getAddress = function (coords) {
        var geocoder = new google.maps.Geocoder();
        return new Promise(function (resolve, reject) {
            geocoder.geocode({ 'location': coords }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    resolve(results);
                }
                else {
                    reject(status);
                }
            });
        });
    };
    NewPositionPage.prototype.savePosition = function () {
        console.log("Registrando...");
        this.usersService.newCheck(this.user).then(function (data) {
            console.log("Insertando...");
        });
        this.viewCtrl.dismiss();
    };
    NewPositionPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    return NewPositionPage;
}());
NewPositionPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-new-position',
        templateUrl: 'new-position.html',
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        ViewController,
        Users])
], NewPositionPage);
export { NewPositionPage };
//# sourceMappingURL=new-position.js.map