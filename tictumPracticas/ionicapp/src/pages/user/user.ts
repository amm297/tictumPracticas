import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Users} from "../../providers/users";
import {HomePage} from "../home/home";
import {User} from '../../models/user';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private usersService: Users) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }
   // Modificado Alma en proceso
  readUserId(userId: String) {
    this.usersService.getOneUser(userId);
  }

  // Modificado Alma en proceso
  logout() {
    this.usersService.logoutUser();
    this.navCtrl.setRoot(HomePage);
  }


  // Modificado Alma

}
