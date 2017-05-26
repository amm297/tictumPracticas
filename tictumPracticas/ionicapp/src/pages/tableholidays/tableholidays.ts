import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Users} from '../../providers/users';

@IonicPage()
@Component({
  selector: 'page-tableholidays',
  templateUrl: 'tableholidays.html',
})
export class TableholidaysPage {

  users;
  displayUsers;
  statusDisplay;

  constructor(public navCtrl: NavController, public navParams: NavParams, private usersService: Users) {
    this.usersService.getAllUsers().then(data => {
      this.users = data['docs'];
      this.statusDisplay = 'pending';
      this.displayUsers = this.getUsersByStatus(this.statusDisplay);
    });
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

  onShowStatus(status){
    this.statusDisplay = status;
    this.displayUsers = this.getUsersByStatus(this.statusDisplay);
  }

  onChangeStatus(user,index,status){
    user.hollidays[index].status=status;
    console.log(user.hollidays[index]);
    this.usersService.changeStatusHollidays(user.hollidays[index]);
    this.onShowStatus('pending');
  }

    
}
