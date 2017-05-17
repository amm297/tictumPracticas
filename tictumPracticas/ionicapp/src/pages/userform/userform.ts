import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {User} from "../../models/user";

@IonicPage()
@Component({
  selector: 'page-userform',
  templateUrl: 'userform.html',
})
export class UserformPage {

  user: User = new User();
  confirmpassword: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
