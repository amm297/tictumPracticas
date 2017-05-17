import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TableusersPage} from "../tableusers/tableusers";

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

  }

}
