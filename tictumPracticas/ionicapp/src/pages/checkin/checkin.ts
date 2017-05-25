import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {UserPage} from "../user/user";
import {Users} from "../../providers/users";
import {User} from "../../models/user";
/**
 * Generated class for the CheckinPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-checkin',
  templateUrl: 'checkin.html',
})
export class CheckinPage {

  checkin ={
    entry:Date(),
    exit:Date(),
    geolocation:{
    	lat:0 ,
    	lng:0
	  }
  }

  user : User = new User();
 
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private userService:Users) {
  	this.user = this.navParams.get("user");
     this.checkin.geolocation.lat = this.navParams.get('lat');
    this.checkin.geolocation.lng = this.navParams.get('lng'); 	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckinPage');
  }

  newCheckin(){
    this.checkin.entry = new Date().toString();
    this.checkin.geolocation.lat = this.navParams.get('lat');
    this.checkin.geolocation.lng = this.navParams.get('lng');
    this.userService.newCheck(this.user, this.checkin.geolocation).then(data => {
      console.log(data);
      this.navCtrl.pop();
    });
  }

}


