import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {Validators, FormBuilder} from '@angular/forms';
import {User} from '../../models/user'

import {Users} from "../../providers/users";
import {AdminPage} from "../admin/admin";
import {UserPage} from "../user/user";
import {ResetPassword} from "../reset-password/reset-password";

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {

  user = {
    input: '',
    password: ''
  };
  loginForm;
  remember;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public alertCtrl: AlertController, private usersService: Users) {
    //console.log('Paso constructor');
    this.user.input = localStorage.getItem("email");
    this.user.password = localStorage.getItem("pwd");

    this.loginForm = formBuilder.group({
      input: ['', Validators.required],
      password: ['', Validators.required],
    });


  }

  ionViewDidLoad() {
    this.userLogin();
  }


  userLogin() {
    console.log("Comprobando Login" + this.loginForm.valid);
    if (this.loginForm.valid) {
      if (this.user.input.includes('@')) {
        this.user.input = this.user.input.toLowerCase();
      }
      this.usersService.loginUser(this.user).then((data) => {
        console.log(data);
        if (data.hasOwnProperty('errmsg')) {
          let alert = this.alertCtrl.create({
            title: 'Oops!',
            subTitle: data['errmsg'],
            buttons: ['Ok']
          });
          alert.present();
        }
        else {
          console.log("Login OK");
          let logUser: User = new User(data);
          if (this.remember) {
            localStorage.setItem("email", logUser.email);
            localStorage.setItem("pwd", logUser.password);
          }
          if (logUser.isAdmin()) this.navCtrl.setRoot(AdminPage);
          else this.navCtrl.setRoot(UserPage,{user:logUser});
        }
        console.log(data);
      });
    }
  }

  goToResetPassword() {
    console.log("Cambiar contraseña del email " + this.user.input);
    this.navCtrl.push(ResetPassword);
  }

}
