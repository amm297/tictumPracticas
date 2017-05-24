import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';

import { LocationPage } from '../location/location';

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

 coords:any={
 	lat:0,
 	lng:0
 }
  address: string;
  description: string = '';

  constructor(
  	public navCtrl: NavController,
  	 public navParams: NavParams,
  	 private viewCtrl : ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPositionPage');
    this.coords.lat = this.navParams.get('lat');
    this.coords.lng = this.navParams.get('lng');
       this.getAddress(this.coords).then(results=> {
        this.address = results[0]['formatted_address'];
      }, errStatus => {
          // Aquí iría el código para manejar el error
      });
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

savePosition(){
	console.log("Registrando...");
}

  close(){ 
    this.viewCtrl.dismiss();
  }
}
