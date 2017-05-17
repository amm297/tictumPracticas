import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { VerEmpleados } from '../verempleados/verempleados';
import { TableRole } from '../table-role/table-role';
/**
 * Generated class for the Admin page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class Admin {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Admin');
  }

  users(){
  	console.log('Inicio de sesión correcto');
    this.navCtrl.push(VerEmpleados);
  }

  roles(){
  	console.log('Inicio de sesión correcto');
    this.navCtrl.push(TableRole);
  }
}
