import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {Users} from "../../providers/users";
import {Roles} from '../../providers/roles';

@IonicPage()
@Component({
  selector: 'page-tableusers',
  templateUrl: 'tableusers.html',
})
export class TableusersPage implements OnInit {

  users: any;
  roles: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private usersService: Users,  private rolesService: Roles, public alertCtrl: AlertController) {
  }

  ngOnInit() {
    // Gonzalo
    this.getAllRoles();
    // Gonzalo
    this.usersService.getAllUsers().then((data) => {
      this.users = data;
      console.log(this.users);
    });
  }
      // Gonzalo
 getAllRoles() {
    this.rolesService.getAllRoles().then((data) => {
      this.roles = data;
      console.log(this.roles);
    });
  }
      // Gonzalo
  deleteUser(userId: String) {
    let confirm = this.alertCtrl.create({
      title: 'Attention!',
      message: 'Do you really want to delete this user?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.usersService.deleteUser(userId);
            this.navCtrl.push(TableusersPage);
          }
        },
        {
          text: 'No'
        }
      ]
    });
    confirm.present();
  }

  modifyUser(user) {
    this.usersService.modifyUser(user);
    this.navCtrl.push(TableusersPage);
  }
  
}