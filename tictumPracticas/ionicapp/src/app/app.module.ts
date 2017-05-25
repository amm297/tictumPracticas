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
import {GenericPasswordPage} from "../pages/generic-password/generic-password";
import {DetailsusersPage} from "../pages/detailsusers/detailsusers";

import {ErrorHandler, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {Http, HttpModule} from "@angular/http";
import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import { NgCalendarModule  } from 'ionic2-calendar';
import {hollidaysPage} from "../pages/hollidays/hollidays";
import {LocationPage} from '../pages/location/location';

import { Geolocation } from '@ionic-native/geolocation';

//Translate config
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CheckinTabsPage} from "../pages/checkin-admin/checkin-tabs/checkin-tabs";
import {CheckinmapPage} from "../pages/checkin-admin/checkinmap/checkinmap";
import {CheckintablePage} from "../pages/checkin-admin/checkintable/checkintable";
import {HollidaysTabsPage} from '../pages/tablehollidays/hollidaystabs/hollidaystabs';
import {TableaprovedPage} from '../pages/tablehollidays/tableaproved/tableaproved';
import {TabledeniedPage} from '../pages/tablehollidays/tabledenied/tabledenied';
import {TablependingPage} from '../pages/tablehollidays/tablepending/tablepending';
export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AdminPage,
    TableusersPage,
    UserformPage,
    hollidaysPage,
    TablerolesPage,
    ResetPassword,
    UserPage,
    GenericPasswordPage,
    CheckinTabsPage,
    CheckinmapPage,
    CheckintablePage,
    DetailsusersPage,
    LocationPage,
    HollidaysTabsPage,
    TableaprovedPage,
    TabledeniedPage,
    TablependingPage
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
    hollidaysPage,
    TablerolesPage,
    ResetPassword,
    UserPage,
    GenericPasswordPage,
    CheckinTabsPage,
    CheckinmapPage,
    CheckintablePage,
    DetailsusersPage,
    LocationPage,
    HollidaysTabsPage,
    TableaprovedPage,
    TabledeniedPage,
    TablependingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Users,
    Roles,
    Geolocation
  ]
})
export class AppModule {
}
