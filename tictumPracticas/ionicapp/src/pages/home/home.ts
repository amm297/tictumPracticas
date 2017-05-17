import {Component} from '@angular/core';
import {NavController,AlertController} from 'ionic-angular';
import {Validators, FormBuilder} from '@angular/forms';
import {Users} from '../../providers/users';


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

  constructor(public nav: NavController, public usersService: Users, public formBuilder: FormBuilder,public alertCtrl: AlertController) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
  }

  userLogin() {
    if (this.loginForm.valid) {
      this.usersService.loginUser(this.user).then((data) => {
        if (data.hasOwnProperty('errmsg')) {
          let alert = this.alertCtrl.create({
            title: 'Oops!',
            subTitle: 'Invalid email or password.',
            buttons: ['Ok']
          });
          alert.present();
        } else {
          console.log("Login OK");
        }
      });
    }
  }

}
