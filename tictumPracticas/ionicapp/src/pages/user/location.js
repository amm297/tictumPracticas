var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
import { NewPositionPage } from '../new-position/new-position';
/**
 * Generated class for the Inicio page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LocationPage = (function () {
    function LocationPage(navCtrl, navParams, modalCtrl, geolocation, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.geolocation = geolocation;
        this.platform = platform;
        this.coords = { lat: 0, lng: 0 };
        platform.ready().then(function () {
            // La plataforma esta lista y ya tenemos acceso a los plugins.
            _this.getPosicion();
        });
    }
    LocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Inicio');
    };
    LocationPage.prototype.loadMap = function () {
        var mapContainer = document.getElementById('map');
        this.map = new google.maps.Map(mapContainer, {
            center: this.coords,
            zoom: 12
        });
        var myPosition = new google.maps.Marker({
            map: this.map,
            position: this.coords
        });
    };
    LocationPage.prototype.getPosicion = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (res) {
            _this.coords.lat = res.coords.latitude;
            _this.coords.lng = res.coords.longitude;
            _this.loadMap();
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    LocationPage.prototype.newPosition = function () {
        var pos = this.modalCtrl.create(NewPositionPage, this.coords);
        pos.present();
    };
    return LocationPage;
}());
LocationPage = __decorate([
    Component({
        selector: 'page-location',
        templateUrl: 'location.html',
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        ModalController,
        Geolocation,
        Platform])
], LocationPage);
export { LocationPage };
//esperanza
/*newPosition(){
  //Vamos a abrir el servicio para añadir nuestro sitio.
  let newPos = this.modalCtrl.create(NewPositionPage, this.coords);
  newPos.present();
}*/
//--Esperanza--
/*Fernando
loadMap(){
 this.geolocation.getCurrentPosition().then((position) => {

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
*/
/*addMarker(){
   // coger geoposicion
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
   
    let content = "<h4>Information!</h4>";
   
    this.addInfoWindow(marker, content);
   
}

  addInfoWindow(marker, content){

        let infoWindow = new google.maps.InfoWindow({
          content: content
        });
       
        google.maps.event.addListener(marker, 'click', () => {
          infoWindow.open(this.map, marker);
        });
       
  }

}*/
//# sourceMappingURL=location.js.map