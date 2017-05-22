import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Validators, FormBuilder} from '@angular/forms';

import {HomePage} from "../home/home";
import {Users} from "../../providers/users";

import {DniValidator} from  '../userform/dniValidator';
/**
 * Generated class for the GenericPasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
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
	
	constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public alertCtrl: AlertController, private usersService: Users) {

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
            
        this.usersService.newPasswdAuto(userData).then((data) => {
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
            this.navCtrl.push(HomePage) ;
          };
	      });
    };

  }

}