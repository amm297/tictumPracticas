import { Component } from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {AdminPage} from '../../admin/admin';

@IonicPage()
@Component({
  selector: 'page-tabledenied',
  templateUrl: 'tabledenied.html',
})
export class TabledeniedPage {

  users;

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
    this.users = navParams.data;
  }

  deniedHollidays(user) {
    let deniedHollidays = user.hollidays.filter(holliday => {
      return (holliday.status == 'denied');
    });
    return (deniedHollidays.length > 0);
  }

  back(){
    this.app.getRootNav().setRoot(AdminPage,{},{
      animate:true,
      direction:'back'
    })
  }

}
