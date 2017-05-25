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
import {ErrorHandler, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";

import { LocationPage } from "../pages/location/location";
import { Geolocation } from '@ionic-native/geolocation';
import {NewPositionPage  } from '../pages/new-position/new-position';
import {GenericPasswordPage} from "../pages/generic-password/generic-password";
import { Coor } from '../providers/coor';


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
    LocationPage,
    NewPositionPage,
    GenericPasswordPage  
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
    LocationPage,
    NewPositionPage,
    GenericPasswordPage  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Users,
    Roles,
    Coor
    
  ]
})
export class AppModule {
}
