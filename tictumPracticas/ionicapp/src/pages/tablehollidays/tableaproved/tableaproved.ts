import { Component } from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {UserPage} from '../../user/user';

@IonicPage()
@Component({
  selector: 'page-tableaproved',
  templateUrl: 'tableaproved.html',
})
export class TableaprovedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
  }

  back(){
    this.app.getRootNav().setRoot(UserPage,{},{
      animate:true,
      direction:'back'
    })
  }

}
