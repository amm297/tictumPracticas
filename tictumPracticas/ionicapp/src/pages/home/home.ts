import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {Validators, FormBuilder} from '@angular/forms';
import {Users} from "../../providers/users";
import {AdminPage} from "../admin/admin";


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

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public alertCtrl: AlertController, private usersService: Users) {
    this.loginForm = formBuilder.group({
      input: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  userLogin() {
    if (this.loginForm.valid) {
      this.usersService.loginUser(this.user).then((data) => {
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
          this.navCtrl.push(AdminPage);
        }
        console.log(data);
      });
    }

  }

}
