import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TableusersPage} from "../tableusers/tableusers";
import {UserformPage} from "../userform/userform";
import {TablerolesPage} from "../tableroles/tableroles";
import {HomePage} from "../home/home";
import {LocationPage} from "../location/location";

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

   onClickLocation(){
    this.navCtrl.push(LocationPage);
  }

  logout(){
    localStorage.clear();
    this.navCtrl.setRoot(HomePage);
  }
}
