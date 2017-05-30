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
  checksDisplay : any[];
  markers: any = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private app: App,
              public geolocation: Geolocation,
              private checkingService: Checking) {
    this.users = this.navParams.data;
     console.log(this.checkingService.userPressed );

  }

  ionViewDidLoad() {
    console.log("Holii");
    this.loadMap().then(_ =>{
      if(this.checkingService.userPressed != null) this.checksDisplay.push(this.checkingService.userPressed);
      this.addMarkers("entrada");
      if(this.checkingService.userPressed != null) this.map.setCenter(this.checkingService.userPressed.checking.entrada.geolocation);
    });

  }

  onChangeDate() {
    this.checksDisplay = this.checkingService.getChecksByDate(this.users, this.date);
    console.log(this.checksDisplay);
    this.addMarkers("entrada");
  }

  loadMap() {

    return this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,

      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      
    }, (err) => {
      console.log(err);
    });

  }

  clearMarkers(){
    for(let m of this.markers){
      m.setMap(null);
    }
    this.markers = [];
  }

  addMarkers(elem) {
    // coger geoposicion
    this.clearMarkers();

    for(let check of this.checksDisplay){
      let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: check.checking[elem].geolocation
      });   
      this.markers.push(marker);
      let content = "<h4>"+check.name +" " + check.lastname+" </h4>"+
                    "<p>" +check.checking[elem].calle + "</p>"+
                    "<p>" +check.checking.date + " " + check.checking[elem].hora+ "</p>";             
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
