import {Component} from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {AdminPage} from '../admin/admin';
import {Users} from '../../providers/users';

@IonicPage()
@Component({
  selector: 'page-tablehollidays',
  templateUrl: 'tablehollidays.html',
})
export class TablehollidaysPage {

  users;
  displayUsers;
  statusDisplay;

  constructor(public navCtrl: NavController, public navParams: NavParams, private app:App, private usersService:Users) {
    this.users = this.navParams.get('users');
  }

  ionViewWillEnter() {
    this.statusDisplay = this.navParams.get('status')
    this.displayUsers = this.getUsersByStatus(this.statusDisplay);
  }

  getUsersByStatus(status) {
    let displayUsers = this.users.filter(user => {
      let found = false;
      for (let holliday of user.hollidays) {
        if (holliday.status == status) found = true;
      }
      return found;
    });
    return displayUsers;
  }

  onChangeStatus(user, index, status) {
    user.hollidays[index].status = status;
    this.getUsersByStatus('pending');
    this.usersService.updateHollidays(user).then(data=>{
      console.log(data);
    });
  }

  onBack(){
    this.app.getRootNav().setRoot(AdminPage, {}, {
      animate: true,
      direction: 'back'
    })
  }

}
