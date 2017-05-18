import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {User} from "../../models/user";
import {Users} from "../../providers/users";
@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

	user:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

getUser() {
    if(this.user.valid){
      console.log("operario!");
    }else{
      console.log("Formulario incorrecto!");
    }
  }
}
