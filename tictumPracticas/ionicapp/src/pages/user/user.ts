import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import {HomePage} from "../home/home";
import {HollidaysPage} from "../hollidays/hollidays";
//import { NewPositionPage } from '../new-position/new-position';
import {ResetPassword} from "../reset-password/reset-password";
import {User} from "../../models/user";
import {Location} from "./location";
import { CheckinPage } from '../checkin/checkin';
import {LocationPage} from "../location/location";
declare var google: any;

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

user: User = new User();

coords:any={
   lat:0,
   lng:0
 }

  constructor(
    public navCtrl: NavController,
    private geolocation: Geolocation,
    public navParams: NavParams,
    private alertCtrl: AlertController) {

    this.user = this.navParams.get("user");
    console.log(this.navParams.get("user"));
    //this.getPosicion();
  }
  onClickLocation() {
    this.navCtrl.push(LocationPage);
  }

//Esperanza
//FUNCIONA
//Al iniciar sesión, recogemos las coordenadas de su localización.
 getPosicion():any{
    this.geolocation.getCurrentPosition().then(res => {
      this.coords.lat = res.coords.latitude;
      this.coords.lng = res.coords.longitude;
      console.log(this.coords.lat);
      console.log(this.coords.lng);
    })
    .catch(
      (error)=>{
        console.log(error);
      }
    );
  }
//HASTA AQUÍ FUNCIONA OK


  /*checkIn(){
    this.navCtrl.push(
      NewPositionPage,{
        user:this.user,
        lat:this.coords.lat,
        lng:this.coords.lng
      });
  }*/
  checkIn(){
    this.navCtrl.push(CheckinPage,{
        user:this.user,
        lat:this.coords.lat,
        lng:this.coords.lngr
      });
   }

//Esperanza

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

  logout(){
    localStorage.clear();
    this.navCtrl.setRoot(HomePage);
  }

  onClickHollidays(){
    this.navCtrl.push(HollidaysPage);
  }

  onChangePassword(){
    this.navCtrl.push(ResetPassword);
  }

  onClickCalendario(){
    this.navCtrl.push(HollidaysPage,{user:this.user});
  }

}
