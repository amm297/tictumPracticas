import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {AdminPage} from "../pages/admin/admin";
import {UserPage} from "../pages/user/user";
import {TableusersPage} from "../pages/tableusers/tableusers";
import {UserformPage} from "../pages/userform/userform";
import {Users} from "../providers/users";
import {TablerolesPage} from "../pages/tableroles/tableroles";
import {Roles} from "../providers/roles";
import {ResetPassword} from "../pages/reset-password/reset-password";

import {LocationPage} from "../pages/location/location";


import {ErrorHandler, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";

import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AdminPage,
    TableusersPage,
    UserformPage,
    TablerolesPage,
    ResetPassword,
    UserPage,
	  LocationPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
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
	  LocationPage
  ],
  providers: [
    Geolocation,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Users,
    Roles,
    

  ]
})
export class AppModule {
}
