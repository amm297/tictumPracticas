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
      DNI: ['', Validators.required],
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
      console.log("Registrar!");
      if(this.user.password==this.confirmpassword) {
        console.log("Registrando!");
        let worker = {
          DNI: this.user.DNI,
          name:this.user.name,
          lastname:this.user.lastname,
          address:this.user.address,
          country:this.user.country,
          phone:this.user.phone,
          email:this.user.email,
          password:this.user.password,
          role:this.user.role
        }  
        this.usersService.registerUser(worker);
      }else{
        console.log("No registrando!");
      }
    }else{
      console.log("Formulario incorrecto!");
    }
  }


}
