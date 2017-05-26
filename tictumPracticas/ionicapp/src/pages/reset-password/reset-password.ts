import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Validators, FormBuilder} from '@angular/forms';

import {HomePage} from "../home/home";

import {User} from "../../models/user";
import {Users} from "../../providers/users";

import {AdminPage} from "../admin/admin";
import {UserPage} from "../user/user";

import {PasswordValidator} from  '../userform/passwordValidator';
import {DniValidator} from  '../userform/dniValidator';

/**
 * Generated class for the ResetPassword page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html'
})
export class ResetPassword {
  
  //user: User = new User();
  confirmpassword: string;
  resetPasswForm;
  user = { 
    email: '', 
    dni:'', 
    password: '' 
  }; 

  constructor(public navCtrl: NavController, private navParams: NavParams, public formBuilder: FormBuilder, public alertCtrl: AlertController, private usersService: Users) {
    if (this.navParams.get('user')){
        this.user.email = this.navParams.get('user').email;
        this.user.dni = this.navParams.get('user').dni;
    } 

    this.resetPasswForm = formBuilder.group({
      password: ['', Validators.compose([Validators.minLength(8),Validators.required])],
      confirmpassword: ['', PasswordValidator.isEqual], 
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPassword');
  }
/*Cambia no resetea*/
  resetPassword(){
		console.log("Changing password...");
		if (this.resetPasswForm.valid) {
     	if (this.user.password == this.confirmpassword) {
        let cambio = {
        	email:this.user.email,
          dni:this.user.dni,
          password: this.user.password,
        }
        		console.log(cambio);
            
          	this.usersService.newPassword(cambio).then((data) => {
            /*Comprobamos que el cambio de contraseña se ha realizado correctamente, si no es así mostramos un error por pantalla.*/
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
                  buttons: ['Aceptar']
                });
                alert.present();

                //Código para que despues de cambiar la contraseña se redireccione al Login de nuevo.
                
                localStorage.setItem("email", this.user.email);
                localStorage.setItem("pwd", this.user.password);
                this.navCtrl.setRoot(HomePage) ;
              
              }              
            });



        	}

      };
    }
	}