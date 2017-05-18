import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnInit } from '@angular/core';

//Añadimos el servicio.
import { Users } from '../../providers/users';


/**
 * Generated class for the Employee page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-employee',
  templateUrl: 'employee.html',
})

export class Employee implements OnInit {

users: any;
employee: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public  usersService: Users) {
  }

  ionViewDidLoad() {
    this.usersService.getAllUsers().then((data) => {
      console.log(data);
      this.users = data;
    });
  }

  ngOnInit(){
    this.employee= this.usersService.currentUser;

  }


}
