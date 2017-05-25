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
import { User } from "../../models/user";
/**
 * Generated class for the CheckinPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CheckinPage = (function () {
    function CheckinPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.checkin = {
            entry: '',
            exit: '',
            geolocation: {
                lat: 0,
                lng: 0
            }
        };
        this.user = new User();
        this.user = this.navParams.get("user");
        this.checkin.geolocation.lat = this.navParams.get('lat');
        this.checkin.geolocation.lng = this.navParams.get('lng');
    }
    CheckinPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CheckinPage');
    };
    return CheckinPage;
}());
CheckinPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-checkin',
        templateUrl: 'checkin.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], CheckinPage);
export { CheckinPage };
//# sourceMappingURL=checkin.js.map