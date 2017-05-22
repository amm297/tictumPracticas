<<<<<<< HEAD
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  logout(){
    localStorage.clear();
    this.navCtrl.setRoot(HomePage);
  }

}
=======
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import {CheckingPage} from "../checking/checking";

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  logout(){
    localStorage.clear();
    this.navCtrl.setRoot(HomePage);
  }
  onChecking(){
    this.navCtrl.push(CheckingPage);
  }

}
>>>>>>> alma
