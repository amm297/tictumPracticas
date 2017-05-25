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
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
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
    function LocationPage(navCtrl, navParams, modalCtrl, geolocation, viewCtrl, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.geolocation = geolocation;
        this.viewCtrl = viewCtrl;
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
        //Marca de la posición actual.
        /*let myPosition = new google.maps.Marker({
          map:this.map,
          position:this.coords
        })*/
    };
    //Eliminar porque lo unificaremos en el user
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
    //Hasta aquí lo eliminaremos despues de terminar las pruebas
    LocationPage.prototype.addMarker = function () {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        var content = "<h4>Information!</h4><h2>User</h2><p>Latitud:"
            + this.coords.lat + "<br>Longitud:"
            + this.coords.lat + "</p>" + Date();
        this.addInfoWindow(marker, content);
    };
    //Muestra la ventana de información al lado del marcador.
    LocationPage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    LocationPage.prototype.newPosition = function () {
        var pos = this.modalCtrl.create(NewPositionPage, this.coords);
        this.addMarker();
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
        ViewController,
        Platform])
], LocationPage);
export { LocationPage };
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
//# sourceMappingURL=location.js.map