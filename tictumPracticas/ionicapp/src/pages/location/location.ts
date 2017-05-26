import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { User }  from '../../models/user';
import { Users}  from '../../providers/users';
 
declare var google;
 
@Component({
  selector: 'page-location',
  templateUrl: 'location.html'
})
export class LocationPage {
 
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  user ;
  check : string = '';
  currentPosition = {
    lat: 0,
    lng: 0
  }
  checking={
    fecha: '',
    entrada: {
      geolocation : {
        lat: 0,
        lng: 0
      },
      calle : '',
      hora : ''
    },
    salida: {
      geolocation : {
        lat: 0,
        lng: 0
      },
      calle : '',
      hora : ''
    }
  }

  constructor(public navCtrl: NavController, 
              public geolocation: Geolocation, 
              private navParams: NavParams,
              private usersService: Users) {
    this.checking.fecha = this.getFormattedDate();
    this.user  = (this.navParams.get('user'))? this.navParams.get('user') : new User();
    this.check = this.getTodayCheck();
    console.log(this.check);
  }
 
  ionViewDidLoad(){
    this.loadMap();
  }
 
  loadMap(){
    this.geolocation.getCurrentPosition()
     .then(position =>{
       this.currentPosition.lat = position.coords.latitude;
       this.currentPosition.lng = position.coords.longitude;
       let latLng = new google.maps.LatLng(this.currentPosition.lat,this.currentPosition.lng);
        let mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,

        }
        this.map = new google.maps.Map(this.mapElement.nativeElement,mapOptions);
     });    
  }

  onClickCheck(){
    this.geolocation.getCurrentPosition()
    .then(position =>{
       this.check = this.getTodayCheck();
       this.currentPosition.lat = position.coords.latitude;
       this.currentPosition.lng = position.coords.longitude;
       this.checking[this.check].geolocation = this.currentPosition;
       let geocoder = new google.maps.Geocoder();
       geocoder.geocode({'location': this.currentPosition}, (res,status)=>{
         this.checking[this.check].calle = res[0]['formatted_address'];
         this.checking[this.check].hora =  new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
         this.addMarker();
         this.usersService.Check(this.user._id,this.checking);
         console.log(this.checking);
         //falta añadir en local
       });
       
    });
  }
  
  addMarker(){
	 // coger geoposicion
	  let marker = new google.maps.Marker({
  		map: this.map,
  		animation: google.maps.Animation.DROP,
  		position: this.currentPosition
	  });	 
	  let content = "<h4>Has Fichado! </h4>"+
                  "<p>" +this.user.name + " " + this.user.lastname+ "</p>"+
                  "<p>" +this.checking[this.check].calle + "</p>"+
                  "<p>" +this.checking.fecha + " " + this.checking[this.check].hora+ "</p>";          	 
	  let infoWindow = new google.maps.InfoWindow({content: content});
    google.maps.event.addListener(marker, 'click', () => { infoWindow.open(this.map, marker);});
	 
}

  getTodayCheck(){

    for(let i in this.user.checking){
      let c = this.user.checking[i];
      console.log(c);
      if(c.fecha == this.getFormattedDate() && c.entrada.hora != "") return "salida";
    }
    return "entrada";    
  }

  getFormattedDate() {
    let date = new Date();
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    let day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    return month + '/' + day + '/' + year;
  }
 
}