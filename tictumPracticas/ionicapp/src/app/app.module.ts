import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TablerolesPage } from '../pages/tableroles/tableroles';
//import { RegisterPage } from '../pages/register-page/register-page';
//import { MainPage } from '../pages/main-page/main-page';
import { Users } from '../providers/users';
import { Roles } from '../providers/roles';
//import {HttpClient} from "./HttpClient";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	TablerolesPage
    //RegisterPage,
    //MainPage
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
	TablerolesPage
    //RegisterPage,
    //MainPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Users,
	Roles
    //HttpClient
  ]
})
export class AppModule {}
