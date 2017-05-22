import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Validators, FormBuilder} from '@angular/forms';


import {AdminPage} from "../admin/admin";
import {Users} from "../../providers/users";

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
  
  confirmpassword: string;
  resetPasswForm;
  user = {
    input: '',
    password: ''
  };

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public alertCtrl: AlertController, private usersService: Users) {
    this.resetPasswForm = formBuilder.group({
      input: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPassword');
  }

  resetPassword(){
		console.log("Changing password...");
		if (this.resetPasswForm.valid) {
        	if (this.user.password == this.confirmpassword) {
        		let cambio = {
        			password: this.user.password,
        			input:this.user.input
        		}
        		console.log(cambio);
          		this.usersService.newPassword(cambio);
          		console.log("Contraseña cambiada");
        	} else {
          		this.navCtrl.push(AdminPage);
        	}

      };
    }
	}

