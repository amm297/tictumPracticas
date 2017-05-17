import { Component } from '@angular/core';
import { IonicPage , NavController, NavParams } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { Users } from '../../providers/users';


@IonicPage()
@Component({
  selector: 'users-comp',
  templateUrl: 'tableusers.html',
})
export class TableUsersPage {

  users2: any;

    constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public users: Users
  ) {
    this.users2 = this.users.getUsers('User');
  }
  
  
}
