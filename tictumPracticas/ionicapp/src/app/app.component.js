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
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import {HomePage} from '../pages/home/home';
import { TranslateService } from "@ngx-translate/core";
//import { AdminPage } from '../pages/admin/admin';
//import {LocationPage } from '../pages/location/location';
import { UserPage } from '../pages/user/user';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, translate) {
        // set the rootPage to the first page we want displayed
        //public rootPage: any = HomePage;
        //public rootPage: any = AdminPage;
        //public rootPage:any=LocationPage;
        this.rootPage = UserPage;
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            translate.setDefaultLang('spa');
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Component({
        templateUrl: 'app.html'
    }),
    __metadata("design:paramtypes", [Platform, StatusBar, SplashScreen, TranslateService])
], MyApp);
export { MyApp };
//# sourceMappingURL=app.component.js.map