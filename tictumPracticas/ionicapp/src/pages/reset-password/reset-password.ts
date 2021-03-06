import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Validators, FormBuilder} from '@angular/forms';

import {HomePage} from "../home/home";

import {GenericProvider} from "../../providers/generic";

import {PasswordValidator} from  '../userform/passwordValidator';

@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html'
})
export class ResetPassword {
  
  //user: User = new User();
  confirmpassword: string;
  resetPasswForm;
  hideOldPassword: boolean = false;
  user = { 
    oldpassword: '',
    email: '', 
    dni:'', 
    password: '' 
  }; 

  constructor(public navCtrl: NavController, private navParams: NavParams, public formBuilder: FormBuilder, public alertCtrl: AlertController, private service: GenericProvider) {
    this.hideOldPassword = (this.navCtrl.last().component.name == "HomePage") ? false : true;
    if (this.navParams.get('user')){
        this.user.email = this.navParams.get('user').email;
        this.user.dni = this.navParams.get('user').dni;        
    } 

    if(this.hideOldPassword == true) {
      this.resetPasswForm = formBuilder.group({
        oldpassword:['',Validators.compose([Validators.minLength(8),Validators.required])],
        password: ['', Validators.compose([Validators.minLength(8),Validators.required])],
        confirmpassword: ['', PasswordValidator.isEqual]
      });
    } else {
      this.resetPasswForm = formBuilder.group({
        password: ['', Validators.compose([Validators.minLength(8),Validators.required])],
        confirmpassword: ['', PasswordValidator.isEqual]
      });      
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPassword');
  }

  resetPassword(){
    console.log("Changing password...");
    if (this.resetPasswForm.valid) {
       //if (this.user.password == this.confirmpassword) {
        let cambio = {
          email:this.user.email,
          dni:this.user.dni,
          password: this.user.password,
          oldpassword:this.user.oldpassword
        }
            console.log(cambio);
            
            this.service.newPassword(cambio).then((data) => {
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



     //     }

      };
    }
  }