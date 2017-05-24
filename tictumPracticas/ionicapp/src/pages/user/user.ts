import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import {HomePage} from "../home/home";
import {HollidaysPage} from "../hollidays/hollidays";
import { NewPositionPage } from '../new-position/new-position';

import {User} from "../../models/user";

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
    public navParams: NavParams) {

    this.user = this.navParams.get("user");
    console.log(this.user)
    this.getPosicion();
  }


//Esperanza
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

//Esperanza

  checkIn(){
    this.navCtrl.push(
      NewPositionPage,{
        user:this.user,
        lat:this.coords.lat,
        lng:this.coords.lng
      });
  }


 onClickCalendario(){
    this.navCtrl.push(HollidaysPage,{user:this.user});
  }

  logout(){
    localStorage.clear();
    this.navCtrl.setRoot(HomePage);
  }
}
