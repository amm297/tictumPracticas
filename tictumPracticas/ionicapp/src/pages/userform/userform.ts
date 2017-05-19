import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Validators, FormBuilder} from '@angular/forms';
import {User} from "../../models/user";
import {Users} from "../../providers/users";
import {Roles} from '../../providers/roles';

import {PasswordValidator} from  './passwordValidator';


import {DniValidator} from  './dniValidator';

@IonicPage()
@Component({
  selector: 'page-userform',
  templateUrl: 'userform.html',
})
export class UserformPage implements OnInit {

  user: User = new User();
  confirmpassword: string;
  userForm;
    roles: any;

  constructor(private navCtrl: NavController, private navParams: NavParams, private usersService: Users, private formBuilder: FormBuilder,  private rolesService: Roles) {
     

    this.userForm = formBuilder.group({
      name: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'),Validators.required])],
      lastname: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'),Validators.required])],
      dni: ['', Validators.compose([Validators.required, DniValidator.isValid, DniValidator.hasValidFormat])],
      address: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['',Validators.compose([Validators.minLength(8),Validators.pattern('[0-9()+-]*'),Validators.required])],
      email: ['',Validators.compose([Validators.minLength(8),Validators.email,Validators.required])],
      password: ['', Validators.compose([Validators.minLength(8),Validators.required])],
      confirmpassword: ['', PasswordValidator.isEqual], 
      role: ['', Validators.required]
    });
  }

  registerUser() {
    if(this.userForm.valid){
     this.usersService.registerUser(this.user).then((data)=>{
        this.navCtrl.pop();
      });
    }else{
      console.log("Formulario incorrecto!");
    }
  }
  ngOnInit() {
    // Gonzalo
    this.getAllRoles();
  }
  getAllRoles() {
    this.rolesService.getAllRoles().then((data) => {
      this.roles = data;
      console.log(this.roles);
    });
  }
      // Gonzalo




}