import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TablerolesPage } from '../pages/tableroles/tableroles';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // set the rootPage to the first page we want displayed

  public rootPage: any = TablerolesPage;
//  public rootPage: any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

