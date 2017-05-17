import {Component} from '@angular/core';
import {NavController,AlertController} from 'ionic-angular';
import {Validators, FormBuilder} from '@angular/forms';
import {AdminPage} from "../admin/admin";

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {

  user = {
    email: '',
    password: ''
  };
  loginForm;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder,public alertCtrl: AlertController) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
  }

  onSubmit(){
    this.navCtrl.push(AdminPage);
  }

}
