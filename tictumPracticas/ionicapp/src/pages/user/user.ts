import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";
import {hollidaysPage} from "../hollidays/hollidays";

import {User} from "../../models/user";

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

user: User = new User();

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {

    this.user = this.navParams.get("user");
    console.log(this.user)

  }

  showConfirm(){
    let confirm = this.alertCtrl.create({
      title: 'Salir',
      message: '¿Estas seguro de cerrar sesion?',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            this.logout();
          }
        },
        {
          text: 'No'
        }
      ]
    });
    confirm.present();
  }

  onClickHollidays(){
    this.navCtrl.push(hollidaysPage);
  }

  logout() {
    localStorage.clear();
    this.navCtrl.setRoot(HomePage);
  }




onClickCalendario(){
    this.navCtrl.push(hollidaysPage,{user:this.user});

  

  }

}
