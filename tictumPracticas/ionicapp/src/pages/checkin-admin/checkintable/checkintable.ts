import { Component } from '@angular/core';
<<<<<<< HEAD
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {AdminPage} from "../../admin/admin";
=======
import {App, IonicPage, NavController} from 'ionic-angular';
import {AdminPage} from "../../admin/admin";
import {Users} from '../../../providers/users';
>>>>>>> master

@IonicPage()
@Component({
  selector: 'page-checkintable',
  templateUrl: 'checkintable.html',
})
export class CheckintablePage {

<<<<<<< HEAD
  constructor(public navCtrl: NavController, public navParams: NavParams,private app: App) {
=======
  users;

  constructor(public navCtrl: NavController, private app: App, private usersService: Users) {
    this.usersService.getAllUsers().then((data) => {
      this.users = data['docs'];
      console.log(this.users);
    });
>>>>>>> master
  }

  back(){
    this.app.getRootNav().setRoot(AdminPage,{},{
      animate:true,
      direction:'back'
    })
  }

}
