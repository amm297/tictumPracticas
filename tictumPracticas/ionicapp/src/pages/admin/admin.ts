import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {TableusersPage} from "../tableusers/tableusers";
import {UserformPage} from "../userform/userform";
import {TablerolesPage} from "../tableroles/tableroles";
import {HomePage} from "../home/home";
import {CheckinTabsPage} from "../checkin-admin/checkin-tabs/checkin-tabs";
import {GenericProvider} from '../../providers/generic';
import {HollidaysTabsPage} from '../tablehollidays/hollidays-tabs';

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})



export class AdminPage {

  users

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private service: GenericProvider) {
    this.service.getAllUsers().then(data => {
      this.users = data;
    })
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

  onClickHolidays() {
    let loading = this.service.createLoading('Cargando usuarios');
    loading.present();
    this.service.getAllUsers().then(data=>{
      loading.dismiss();
      this.navCtrl.push(HollidaysTabsPage,data);
      }
    );
  }

  onClickCheckIn() {
    let loading = this.service.createLoading('Cargando usuarios');
    loading.present();
    this.service.getAllUsers().then(data=>{
        loading.dismiss();
        this.navCtrl.push(CheckinTabsPage,data);
      }
    );
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
