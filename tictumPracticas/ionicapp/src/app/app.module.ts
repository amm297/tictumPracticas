import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register-page/register-page';
import { MainPage } from '../pages/main-page/main-page';
import { Users } from '../providers/users';
import {HttpClient} from "./HttpClient";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    MainPage
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
    RegisterPage,
    MainPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Users,
    HttpClient
  ]
})
export class AppModule {}
