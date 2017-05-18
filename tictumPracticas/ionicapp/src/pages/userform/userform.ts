import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Validators, FormBuilder} from '@angular/forms';
import {User} from "../../models/user";
import {Users} from "../../providers/users";

@IonicPage()
@Component({
  selector: 'page-userform',
  templateUrl: 'userform.html',
})
export class UserformPage {

  user: User = new User();
  confirmpassword: string;
  userForm;

  constructor(private navCtrl: NavController, private navParams: NavParams, private usersService: Users, private formBuilder: FormBuilder) {
    this.userForm = formBuilder.group({
      dni: ['', Validators.required],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      address: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
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


}
