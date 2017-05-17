import { Component } from '@angular/core';
import { IonicPage , NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TableRolesPage } from '../tableroles/tableroles';
import { TableUsersPage } from '../tableusers/tableusers';

@IonicPage()
@Component({
  selector: 'admin-app',
  templateUrl: 'admin.html',
})
export class AdminPage {

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder
  ) {
    
  }
  
  onclickroles(){
   this.navCtrl.push(TableRolesPage);
 }
 onclickusers(){
   this.navCtrl.push(TableUsersPage);
 }

}
