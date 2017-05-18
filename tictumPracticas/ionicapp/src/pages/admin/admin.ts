import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TableusersPage} from "../tableusers/tableusers";
import {UserformPage} from "../userform/userform";
import {TablerolesPage} from "../tableroles/tableroles";
import {Employee} from "../employee/employee";

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onClickUsers(){
    this.navCtrl.push(TableusersPage);
  }

  onClickRoles(){
    this.navCtrl.push(TablerolesPage);
  }

  onClickAddUser(){
    this.navCtrl.push(UserformPage);
  }

  onClickEmployee(){
    this.navCtrl.push(Employee);
  }

}
