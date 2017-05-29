import {Component, ViewChild, ElementRef} from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation';
import {AdminPage} from "../../admin/admin";
import {Checking} from '../../../providers/checking';

declare var google;

@Component({
  selector: 'page-checkinmap',
  templateUrl: 'checkinmap.html',
})
export class CheckinmapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  users;
  date = new Date().toISOString();
  checksDisplay;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private app: App,
              public geolocation: Geolocation,
              private checkingService: Checking) {
    this.users = this.navParams.data;
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  onChangeDate() {
    this.checksDisplay = this.checkingService.getChecksByDate(this.users, this.date);
    console.log(this.checksDisplay);
  }

  loadMap() {

    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,

      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.addMarkers();

    }, (err) => {
      console.log(err);
    });

  }

  addMarkers() {
    // coger geoposicion
    for(let check of this.checksDisplay){
      let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: check.checking.entrada.geolocation
      });   
      let content = "<h4>"+check.name+" </h4>"+
                    "<p>" +check.checking.entrada.calle + "</p>"+
                    "<p>" +check.checking.date + " " + check.checking.entrada.hora+ "</p>";             
      let infoWindow = new google.maps.InfoWindow({content: content});
      google.maps.event.addListener(marker, 'click', () => { infoWindow.open(this.map, marker);});
    }
  }

  addInfoWindow(marker, content) {

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }

  back() {
    this.app.getRootNav().setRoot(AdminPage, {}, {
      animate: true,
      direction: 'back'
    })
  }

}
