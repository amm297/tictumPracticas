import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Validators, FormBuilder} from '@angular/forms';
import {User} from "../../models/user";
import {Users} from "../../providers/users";

import {PasswordValidator} from  './passwordValidator';

import { UUID } from 'angular2-uuid';

@IonicPage()
@Component({
  selector: 'page-userform',
  templateUrl: 'userform.html',
})
export class UserformPage {


  static uuid = UUID.UUID();
  user: User = new User();
  confirmpassword: string;
  userForm;

  constructor(private navCtrl: NavController, private navParams: NavParams, private usersService: Users, private formBuilder: FormBuilder) {
    

    this.userForm = formBuilder.group({
      DNI: ['', Validators.compose([Validators.required])],
      name: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'),Validators.required])],
      lastname: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'),Validators.required])],
      address: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['',Validators.compose([Validators.minLength(8),Validators.pattern('[0-9()+-]*'),Validators.required])],
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.minLength(8),Validators.required])],
      confirmpassword: ['', PasswordValidator.isEqual],
 
      role: ['', Validators.required]
    });
  }

  registerUser() {
    if(this.userForm.valid){
      console.log("Registrar!");
    }else{
      console.log("Formulario incorrecto!");
    }
  }




}
