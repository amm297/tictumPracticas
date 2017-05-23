import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";
import {hollidaysPage} from '../hollidays/hollidays';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController) {
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

}
