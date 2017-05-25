import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {Validators, FormBuilder} from '@angular/forms';
import {User} from '../../models/user'

import {Users} from "../../providers/users";
import {AdminPage} from "../admin/admin";
import {UserPage} from "../user/user";
import {ResetPassword} from "../reset-password/reset-password";
import {GenericPasswordPage} from "../generic-password/generic-password";
import {TranslateService} from "@ngx-translate/core";

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
  language;

  constructor(public navCtrl: NavController,
              public formBuilder: FormBuilder,
              public alertCtrl: AlertController,
              private usersService: Users,
              private translateService: TranslateService) {
    //console.log('Paso constructor');
    this.user.input = localStorage.getItem("email");
    this.user.password = localStorage.getItem("pwd");
    if(localStorage.getItem("language")){
      translateService.use(localStorage.getItem("language"));
    }
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
        if (data.hasOwnProperty('errmsg')) {
          let alert = this.alertCtrl.create({
            title: 'Oops!',
            subTitle: data['errmsg'],
            buttons: ['Ok']
          });
          alert.present();
        } else {
          //Modificado por Esperanza
          console.log("Login OK");
          console.log(this.navCtrl.last().component.name);
          let logUser: User = new User(data);
          console.log(logUser);
          if(logUser.isActive()){
            let alert = this.alertCtrl.create({
              title: 'Oops!',
              subTitle: "No pudedes iniciar sesion en estos momentos",
              buttons: ['Ok']
            });
            alert.present();
           }else{
             if (data['autoP']==true){
                 console.log("Tienes que cambiar la contraseña");
                let alert = this.alertCtrl.create({
                  title: 'Login OK!',
                  subTitle: data['changePassw'],
                  buttons: ['Ok']
                });
                alert.present();
                this.navCtrl.setRoot(ResetPassword, logUser);
            //Fin modificación
             } else {
                 console.log("Login correcto");
                // let logUser: User = new User(data);
                if (this.remember) {
                  localStorage.setItem("email", logUser.email);
                  localStorage.setItem("pwd", logUser.password);
                }
                if (logUser.isAdmin()) this.navCtrl.setRoot(AdminPage);
                else this.navCtrl.setRoot(UserPage);
            }
          }
        }
        console.log(data);
      });
    }
  }

  goToResetPassword() {
    console.log("Cambiar contraseña del email " + this.user.input);
    this.navCtrl.setRoot(GenericPasswordPage, this.user.input);
  }

  onLanguage(event) {
    switch (event.value) {
      case 'spa':
        this.translateService.use('spa');
        localStorage.setItem("language","spa");
        break;
      case 'eng':
        this.translateService.use('eng');
        localStorage.setItem("language","eng");
        break;
    }
  }
}
