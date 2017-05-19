import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TableusersPage} from "../tableusers/tableusers";
import {UserformPage} from "../userform/userform";
import {HomePage} from "../home/home";
import {TablerolesPage} from "../tableroles/tableroles";
import {Users} from "../../providers/users";
import {User} from '../../models/user'


@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private usersService: Users) {
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
  // Modificado Alma en proceso
  logout() {
    this.usersService.logoutUser();
    this.navCtrl.setRoot(HomePage);
  }

}
