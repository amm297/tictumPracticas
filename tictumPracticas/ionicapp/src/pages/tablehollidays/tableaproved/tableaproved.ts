import {Component} from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {AdminPage} from '../../admin/admin';

@IonicPage()
@Component({
  selector: 'page-tableaproved',
  templateUrl: 'tableaproved.html',
})
export class TableaprovedPage {

  users;

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
    this.users = navParams.data;
  }

  aprovedHollidays(user) {
    let aprovedHollidays = user.hollidays.filter(holliday => {
      return (holliday.status == 'aproved');
    });
    return (aprovedHollidays.length > 0);
  }

  back() {
    this.app.getRootNav().setRoot(AdminPage, {}, {
      animate: true,
      direction: 'back'
    })
  }

}
