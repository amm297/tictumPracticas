import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {TranslateService} from "@ngx-translate/core";
//import {HollidaysTabsPage} from '../pages/tablehollidays/hollidaystabs/hollidaystabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // set the rootPage to the first page we want displayed
  public rootPage: any = HomePage;
  //public rootPage: any = AdminPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, translate: TranslateService) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      translate.setDefaultLang('spa');
    });
  }
}

