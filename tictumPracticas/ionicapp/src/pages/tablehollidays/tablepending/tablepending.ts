import {Component} from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {AdminPage} from '../../admin/admin';
import {Users} from '../../../providers/users';

@IonicPage()
@Component({
  selector: 'page-tablepending',
  templateUrl: 'tablepending.html',
})
export class TablependingPage {

  users;

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App, private usersService: Users) {
    this.usersService.getAllUsers().then((data) => {
      this.users = data['docs'];
    });
  }

  pendingHollidays(user) {
    let pendingHollidays = user.hollidays.filter(holliday => {
      return (holliday.status == 'pending');
    });
    return (pendingHollidays.length > 0);
  }

  back() {
    this.app.getRootNav().setRoot(AdminPage, {}, {
      animate: true,
      direction: 'back'
    })
  }

}
