import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { GoogleMap, GoogleMapsEvent, GoogleMapsLatLng } from 'ionic-native';
 
@Component({
  selector: 'page-location',
  templateUrl: 'location.html'
})
export class LocationPage {
 
    map:any;
 
   constructor(public navCtrl: NavController, public platform: Platform) {
  platform.ready().then(() => {
    this.loadMap();
  });
}
 
   loadMap() {
  this.map = new GoogleMap('map');

  this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
    console.log('Map is ready!');
  });
}

}
