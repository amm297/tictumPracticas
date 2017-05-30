import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Validators, FormBuilder} from '@angular/forms';

import {HomePage} from "../home/home";
import {GenericProvider} from "../../providers/generic";

import {DniValidator} from  '../userform/dniValidator';

@IonicPage()
@Component({
  selector: 'page-generic-password',
  templateUrl: 'generic-password.html',
})
export class GenericPasswordPage {
	genericPasswForm;
	user = {
    	email: '',
    	dni:''
  	};
	
	constructor(public navCtrl: NavController, 
              public formBuilder: FormBuilder, 
              public alertCtrl: AlertController, 
              private service: GenericProvider) {

    	this.genericPasswForm = formBuilder.group({
      		email: ['',Validators.compose([Validators.minLength(8),Validators.email,Validators.required])],
      		dni: ['', Validators.compose([Validators.required, DniValidator.isValid, DniValidator.hasValidFormat])]
    	});
  	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GenericPasswordPage');
  }

  genericPassword(){
  	console.log("Cambiando a la contraseña genérica");

  	if (this.genericPasswForm.valid) {
        let userData = {
        	email:this.user.email,
          dni:this.user.dni
        }
            
        this.service.newPasswdAuto(userData).then((data) => {
          /*Creamos una contraseña genérica para cada usuario*/
          if(data.hasOwnProperty('errmsg')){
            let alert = this.alertCtrl.create({
              title: 'Error!',
              subTitle: data['errmsg'],
              buttons: ['Ok']
            });
            alert.present();
          } else {
            let alert = this.alertCtrl.create({
              title: 'OK!',
              subTitle: data['msgok'],
              buttons: ['Accept']
            });
            alert.present();
            this.navCtrl.setRoot(HomePage) ;
          };
	      });
    };

  }

}
