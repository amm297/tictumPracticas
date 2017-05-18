import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TableusersPage} from "../tableusers/tableusers";
import {UserformPage} from "../userform/userform";
import {UserPage} from "../user/user";
import {TablerolesPage} from "../tableroles/tableroles";

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
  onClickUser(){
    this.navCtrl.push(UserPage);
  }

}
