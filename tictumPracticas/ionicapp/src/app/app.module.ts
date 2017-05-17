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
    Users
    //HttpClient
  ]
})
export class AppModule {}

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
<<<<<<< Temporary merge branch 1
    Users,
	Roles
=======
    Users
>>>>>>> Temporary merge branch 2
    //HttpClient
  ]
})
export class AppModule {}

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AdminPage} from "../pages/admin/admin";
import {TableusersPage} from "../pages/tableusers/tableusers";
import {UserformPage} from "../pages/userform/userform";
import {Users} from "../providers/users";
import {TablerolesPage} from "../pages/tableroles/tableroles";
import {Roles} from "../providers/roles";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AdminPage,
    TableusersPage,
    UserformPage,
    TablerolesPage
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
    TablerolesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Users,
    Roles
  ]
})
export class AppModule {}
