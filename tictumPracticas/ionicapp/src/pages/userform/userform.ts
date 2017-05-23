import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {Validators, FormBuilder} from '@angular/forms';
import {User} from "../../models/user";
import {Users} from "../../providers/users";

import {PasswordValidator} from  './passwordValidator';
import {DniValidator} from  './dniValidator';
import {Roles} from "../../providers/roles";

@IonicPage()
@Component({
  selector: 'page-userform',
  templateUrl: 'userform.html',
})
export class UserformPage {

  user: User = new User();
  roles: any;
  confirmpassword: string;
  userForm;
  text : string = "REGISTER_USER";
  edit : boolean = false;

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private usersService: Users,
              private rolesService: Roles,
              private formBuilder: FormBuilder,
              private alertCtrl: AlertController) {

    if (this.navParams.get('user')) {
        this.user = this.navParams.get('user');
        this.text = "EDIT_USER";
        this.edit = true;
    }

    this.userForm = formBuilder.group({
      name: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      lastname: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      dni: ['', Validators.compose([Validators.required, DniValidator.isValid, DniValidator.hasValidFormat])],
      address: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', Validators.compose([Validators.minLength(8), Validators.pattern('[0-9()+-]*'), Validators.required])],
      email: ['', Validators.compose([Validators.minLength(8), Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.minLength(8), Validators.required])],
      confirmpassword: ['', PasswordValidator.isEqual],
      role: ['', Validators.required]
    });
  }

  ionViewWillLoad() {
    this.rolesService.getAllRoles().then(data => {
      this.roles = data;
    });
  }

  registerUser() {
    if (this.userForm.valid) {
      if(this.edit){
        this.usersService.modifyUser(this.user).then(data =>{
          if(!data.hasOwnProperty('errmsg')) this.navCtrl.pop();
        });
      }else{
        this.usersService.registerUser(this.user).then((data) => {
          if (data.hasOwnProperty('errmsg')) {
            let msg = '';
            if (data['errmsg'].indexOf('dni') > 0) msg = "DNI ya en uso: " + this.user.dni;
            else  msg = "Email ya en uso: " + this.user.email;

            let alert = this.alertCtrl.create({
              title: 'Oops!',
              subTitle: msg,
              buttons: ['Ok']
            });
            alert.present();
          } else {
            this.navCtrl.pop();
          }
        });
      }

    } else {
      console.log("Formulario incorrecto!");
    }
  }


}
