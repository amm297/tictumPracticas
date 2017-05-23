import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {TableusersPage} from "../tableusers/tableusers";
import {UserformPage} from "../userform/userform";
import {TablerolesPage} from "../tableroles/tableroles";
import {HomePage} from "../home/home";

import {hollidaysPage} from "../hollidays/hollidays";


@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  onClickUsers() {
    this.navCtrl.push(TableusersPage);
  }

  onClickRoles() {
    this.navCtrl.push(TablerolesPage);
  }

  onClickAddUser() {
    this.navCtrl.push(UserformPage);
  }

  showConfirm() {
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

  logout() {
    localStorage.clear();
    this.navCtrl.setRoot(HomePage);
  }
}
