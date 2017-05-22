import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {Users} from "../../providers/users";
import {UserformPage} from '../userform/userform'

@IonicPage()
@Component({
  selector: 'page-tableusers',
  templateUrl: 'tableusers.html',
})
export class TableusersPage implements OnInit {

  users: any;
  search:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private usersService: Users,
              private alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.usersService.getAllUsers().then((data) => {
      this.users = data;
      this.search = data;
      console.log(this.users);
    });
  }


  deleteUser(userId: String, index: number) {
    let confirm = this.alertCtrl.create({
      title: 'Cuidado!',
      message: '¿Estas seguro de eliminar el usuario?',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            this.usersService.deleteUser(userId);
            this.users.splice(index, 1);
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
    this.navCtrl.push(UserformPage, {user: user});
  }

  onInput(event) {
    let input = event.target.value;
    if(input && input.trim()!=''){
      this.search = this.users.filter(user=>{
        return (
          user.name.toLowerCase().indexOf(input.toLowerCase())!= -1 ||
          user.dni.indexOf(input)> -1 ||
          user.email.toLowerCase().indexOf(input.toLowerCase())> -1 ||
          user.role.toLowerCase().indexOf(input.toLowerCase())> -1 )
      });
    }else{
      this.search = this.users;
    }
  }


}
