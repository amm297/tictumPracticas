import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AdminPage} from "../pages/admin/admin";
import {TableusersPage} from "../pages/tableusers/tableusers";
import {UserformPage} from "../pages/userform/userform";
import {Users} from "../providers/users";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AdminPage,
    TableusersPage,
    UserformPage
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
    UserformPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Users
  ]
})
export class AppModule {}
