import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {HomePage} from "../home/home";
import {HollidaysPage} from "../hollidays/hollidays";
import {ResetPassword} from "../reset-password/reset-password";
import {User} from "../../models/user";
import {LocationPage} from '../location/location'

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

user: User = new User();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController) {

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
    this.navCtrl.push(HollidaysPage,{user:this.user});
  }
  onChangePassword(){
    this.navCtrl.push(ResetPassword);
  }
  onClickMap(){
    this.navCtrl.push(LocationPage);
  }
  logout(){
    localStorage.clear();
    this.navCtrl.setRoot(HomePage);
  }

}
