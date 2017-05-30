
import {Component} from '@angular/core';
import {AlertController, LoadingController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";
import {hollidaysPage} from "../hollidays/hollidays";
import {ResetPassword} from "../reset-password/reset-password";

import {User} from "../../models/user";
import {LocationPage} from '../location/location';
import {GenericProvider} from '../../providers/generic';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

user: User = new User();
  shownGroup = null;

  constructor(public navCtrl: NavController,
              public navParams: NavParams, 
              private alertCtrl: AlertController, 
              private loadingCtrl:LoadingController,
               private service:GenericProvider) {

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

  createLoading(msg){
    return this.loadingCtrl.create({
      content:msg
    });
  }

  onClickHollidays(){
    let loading = this.createLoading("Cargando Calendario...");
    loading.present();
    this.service.getUserById(this.user['_id']).then(data =>{
      this.user = new User(data);

      loading.dismiss();
      this.navCtrl.push(hollidaysPage,{user:this.user});
    });
    //this.genericService
    
  }

  logout() {
    localStorage.clear();
    this.navCtrl.setRoot(HomePage);
  }

  onChangePassword(){
    this.navCtrl.push(ResetPassword,{user: this.user});
  }

  onClickMap(){
    this.navCtrl.push(LocationPage,{user:this.user});
  }

toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
  };

  isGroupShown(group) {
    return this.shownGroup === group;
  };

}
