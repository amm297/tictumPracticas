import { Component } from '@angular/core';
import { IonicPage , NavController, NavParams } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'roles-comp',
  templateUrl: 'tableroles.html'
})
export class TableRolesPage {

  users: any;

  
  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public navParams: NavParams
  ) {
    this.users = this.navParams.get('users');
  }

  verroles(){
    
  }
  
  
}
