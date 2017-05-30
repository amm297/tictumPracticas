import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {Validators, FormBuilder} from '@angular/forms';
import {User} from '../../models/user'
import {AdminPage} from "../admin/admin";
import {UserPage} from "../user/user";
import {ResetPassword} from "../reset-password/reset-password";
import {GenericPasswordPage} from "../generic-password/generic-password";
import {TranslateService} from "@ngx-translate/core";
import {GenericProvider} from '../../providers/generic';

@Component({
  selector: 'page-home',
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
              private service: GenericProvider,
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
    //Formulario de login válido
    if (this.loginForm.valid) {
      // Comrpobar que el campo es un email
      if (this.user.input.includes('@')) this.user.input = this.user.input.toLowerCase();
      
      //hacer el login contra el servicio
      this.service.loginUser(this.user).then((data) => {
        //Se produce un error al iniciar sesion
        if (data.hasOwnProperty('errmsg')) {
          let alert = this.alertCtrl.create({
            title: 'Oops!',
            subTitle: data['errmsg'],
            buttons: ['Ok']
          });
          alert.present();
        }
        //El login es correco
        else {
          let logUser: User = new User(data); //usuario que se ha logueado
          //El usuario no esta activado
          if(logUser.isInactive()){
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
            }else{
              //Guardar el usuario para inicio de sesion automatico
              if (this.remember) {
                localStorage.setItem("email", logUser.email);
                localStorage.setItem("pwd", this.user.password);
              }
              //Cambio de contraseña
              if(logUser.password == "1234cambio") this.navCtrl.setRoot(ResetPassword,{user:logUser});
              else{
                //Gestion de tipo de usuairio
                if (logUser.isAdmin()) this.navCtrl.setRoot(AdminPage);
                else this.navCtrl.setRoot(UserPage,{user:logUser});
              }
            }  
          }
          
        }
      });
    }
  }

  goToResetPassword() {
    console.log("Cambiar contraseña del email " + this.user.input);
    this.navCtrl.push( GenericPasswordPage, this.user.input);
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
