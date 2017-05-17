import { Component } from '@angular/core';
import { IonicPage , NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminPage } from '../admin/admin';
import { HttpModule } from '@angular/http';

@IonicPage()
@Component({
  selector: 'login-app',
  templateUrl: 'login.html',
})
export class LoginPage {

    
  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder
  ) {
    
  }
  
  
 onclick(){
   this.navCtrl.push(AdminPage);
 }
}
