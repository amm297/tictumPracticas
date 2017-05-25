import { Component } from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {UserPage} from '../../user/user';

/**
 * Generated class for the TabledeniedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tabledenied',
  templateUrl: 'tabledenied.html',
})
export class TabledeniedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
  }

  back(){
    this.app.getRootNav().setRoot(UserPage,{},{
      animate:true,
      direction:'back'
    })
  }

}
