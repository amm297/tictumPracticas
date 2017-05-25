import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';

import { LocationPage } from '../location/location';
import {Users} from "../../providers/users";
import {User} from "../../models/user";
declare var google: any;

/**
 * Generated class for the NewPositionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-new-position',
  templateUrl: 'new-position.html',
})

export class NewPositionPage {
user : User = new User();
 checkin:any={
 	 entry:String,
   exit:String,
   geolocation:{
    lat:Number,
    lng:Number
   }
 }
  address: string;
  description: string = '';

  constructor(
  	public navCtrl: NavController,
  	 public navParams: NavParams,
  	 private viewCtrl : ViewController,
  	 private usersService: Users,) {
  	this.user = this.navParams.get("user");
  	this.checkin.geolocation.lat = this.navParams.get('lat');
    this.checkin.geolocation.lng = this.navParams.get('lng');
       this.getAddress(this.checkin.geolocation).then(results=> {
        this.address = results[0]['formatted_address'];
      }, errStatus => {
          // Aquí iría el código para manejar el error
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPositionPage');
    
  }
  
 getAddress(coords):any {
    var geocoder = new google.maps.Geocoder();

    return new Promise(function(resolve, reject) {
        geocoder.geocode({'location': coords} , function (results, status) { // llamado asincronamente
            if (status == google.maps.GeocoderStatus.OK) {
                resolve(results);
            } else {
                reject(status);
            }
        });
    });
}

/*savePosition(){
	console.log("Registrando...");
	this.usersService.newCheck(this.user).then(data =>{
      console.log("Insertando...");
    });
        this.viewCtrl.dismiss();
}*/

  close(){ 
    this.viewCtrl.dismiss();
  }
}
