import { Component } from '@angular/core';
import { NavController, NavParams, ModalController  } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';

import { NewPositionPage } from '../new-position/new-position';

declare var google: any;



/**
 * Generated class for the Inicio page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class Location {
  
 map: any; // Manejador del mapa.
 coords : any = { lat: 0, lng: 0 }
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl : ModalController,
    private geolocation: Geolocation,
    public  platform: Platform) {
      platform.ready().then(() => {    
      // La plataforma esta lista y ya tenemos acceso a los plugins.
        this.getPosicion();
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Inicio');
  }

  loadMap(){
   let mapContainer = document.getElementById('map');
    this.map = new google.maps.Map(mapContainer, {
      center: this.coords,
      zoom: 12
    });
 /*   let myPosition = new google.maps.Marker({
      map:this.map,
      position:this.coords
    })*/
}

 getPosicion():any{
    this.geolocation.getCurrentPosition().then(res => {
      this.coords.lat = res.coords.latitude;
      this.coords.lng = res.coords.longitude;
    
      this.loadMap();
    })
    .catch(
      (error)=>{
        console.log(error);
      }
    );
  }

  newPosition(){
    let pos= this.modalCtrl.create(NewPositionPage, this.coords);
    pos.present();
  }
}
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
