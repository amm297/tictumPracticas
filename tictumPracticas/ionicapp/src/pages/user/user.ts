import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import {HollidaysPage} from "../hollidays/hollidays";

import {User} from "../../models/user";

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

user: User = new User();

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.user = this.navParams.get("user");
    console.log(this.user)

  }

  logout(){
    localStorage.clear();
    this.navCtrl.setRoot(HomePage);
  }




onClickCalendario(){
    this.navCtrl.push(HollidaysPage,{user:this.user});

  

  }

}
