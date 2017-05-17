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
    input: '',
    password: ''
  };
  loginForm;

  constructor(public nav: NavController, public usersService: Users, public formBuilder: FormBuilder,public alertCtrl: AlertController) {
    this.loginForm = formBuilder.group({
      input: ['',Validators.required],
      password: ['', Validators.required],
    });
  }

  userLogin() {
    if (this.loginForm.valid) {
      this.usersService.loginUser(this.user).then((data) => {
        console.log(data);
        if (data.hasOwnProperty('errmsg1')) {
          let alert = this.alertCtrl.create({
            title: 'Oops!',
            subTitle: 'Invalid Email or Dni.',
            buttons: ['Ok']
          });
          alert.present();
        } 
        else if (data.hasOwnProperty('errmsg2')) {
          let alert = this.alertCtrl.create({
            title: 'Oops!',
            subTitle: 'Invalid Password',
            buttons: ['Ok']
          });
          alert.present();
        } 

        else {
          console.log("Login OK");
        }
      });
    }
  }

}
