import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams,AlertController} from 'ionic-angular';
import {Users} from "../../providers/users";
import {UserformPage} from '../userform/userform'

@IonicPage()
@Component({
  selector: 'page-tableusers',
  templateUrl: 'tableusers.html',
})
export class TableusersPage implements OnInit {

  users:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private usersService: Users,
              private alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.usersService.getAllUsers().then((data) => {
      this.users = data;
      console.log(this.users);
    });
  }




  deleteUser(userId: String) { 
    let confirm = this.alertCtrl.create({ 
      title: 'Attention!', 
      message: 'Do you really want to delete this user?', 
      buttons: [ 
        { 
          text: 'Yes', 
          handler: () => { 
            this.usersService.deleteUser(userId); 
            this.navCtrl.pop();
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
    this.navCtrl.push(UserformPage,{user:user}); 
  } 



}
