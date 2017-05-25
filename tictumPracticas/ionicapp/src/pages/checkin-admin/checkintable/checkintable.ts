import { Component } from '@angular/core';
import {App, IonicPage, NavController} from 'ionic-angular';
import {AdminPage} from "../../admin/admin";
import {Users} from '../../../providers/users';

@IonicPage()
@Component({
  selector: 'page-checkintable',
  templateUrl: 'checkintable.html',
})
export class CheckintablePage {

  users;

  constructor(public navCtrl: NavController, private app: App, private usersService: Users) {
    this.usersService.getAllUsers().then((data) => {
      this.users = data['docs'];
      console.log(this.users);
    });
  }

  back(){
    this.app.getRootNav().setRoot(AdminPage,{},{
      animate:true,
      direction:'back'
    })
  }

}
