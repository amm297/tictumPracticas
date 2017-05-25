var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AdminPage } from "../pages/admin/admin";
import { UserPage } from "../pages/user/user";
import { TableusersPage } from "../pages/tableusers/tableusers";
import { UserformPage } from "../pages/userform/userform";
import { Users } from "../providers/users";
import { TablerolesPage } from "../pages/tableroles/tableroles";
import { Roles } from "../providers/roles";
import { ResetPassword } from "../pages/reset-password/reset-password";
import { GenericPasswordPage } from "../pages/generic-password/generic-password";
import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Http, HttpModule } from "@angular/http";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
//Translate config
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function createTranslateLoader(http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
//GEOLOCALIZACION
import { LocationPage } from "../pages/location/location";
import { NewPositionPage } from "../pages/new-position/new-position";
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';
// Hollydays
import { NgCalendarModule } from 'ionic2-calendar';
import { HollidaysPage } from "../pages/hollidays/hollidays";
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            MyApp,
            HomePage,
            AdminPage,
            TableusersPage,
            UserformPage,
            TablerolesPage,
            ResetPassword,
            UserPage,
            GenericPasswordPage,
            LocationPage,
            HollidaysPage,
            NewPositionPage
        ],
        imports: [
            BrowserModule,
            NgCalendarModule,
            HttpModule,
            IonicModule.forRoot(MyApp),
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: (createTranslateLoader),
                    deps: [Http]
                }
            })
        ],
        bootstrap: [IonicApp],
        entryComponents: [
            MyApp,
            HomePage,
            AdminPage,
            TableusersPage,
            UserformPage,
            TablerolesPage,
            ResetPassword,
            UserPage,
            GenericPasswordPage,
            LocationPage,
            HollidaysPage,
            NewPositionPage
        ],
        providers: [
            StatusBar,
            SplashScreen,
            { provide: ErrorHandler, useClass: IonicErrorHandler },
            Users,
            Roles,
            Geolocation,
            GoogleMaps
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map