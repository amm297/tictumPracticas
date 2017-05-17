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
    email: '',
    password: ''
  };
  loginForm;

  constructor(public nav: NavController, public usersService: Users, public formBuilder: FormBuilder,public alertCtrl: AlertController) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
  }

  userLogin() {
    if (this.loginForm.valid) {
      this.usersService.loginUser(this.user).then((data) => {
        console.log(data);
        
        let body = data["_body"];


  //controlamos el json que devolvemos vacio(cuando no hay usuario registrado)

      if(body.length>=3){

         console.log("return")
       let datas=JSON.parse(data["_body"]);
       console.log(datas);

      }
      else {
console.log("no hay usuario");

      }
      


      });
    }
  }

}
