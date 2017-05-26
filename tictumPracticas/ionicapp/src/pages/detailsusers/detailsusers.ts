import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import {Users} from "../../providers/users";
import {UserformPage} from '../userform/userform';

@IonicPage()
@Component({
  selector: 'page-detailsusers',
  templateUrl: 'detailsusers.html',
})
export class DetailsusersPage {

  user: any;

  constructor(public navCtrl: NavController,
  			  public navParams: NavParams,
  			  public viewCtrl: ViewController,
          private usersService: Users,
          private alertCtrl: AlertController) {

  	console.log('Constructor de la Ventana Modal: ' , this.navParams.get("user"));
  	this.user = this.navParams.get("user");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsusersPage');
  }

  deleteUser(userId: String) { //, index: number
    let confirm = this.alertCtrl.create({
      title: 'Cuidado!',
      message: '¿Estas seguro de eliminar el usuario?',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            this.usersService.deleteUser(userId);
            //this.users.splice(index, 1);
          }
        },
        {
          text: 'No'
        }
      ]
    });
    confirm.present();
  }

   changeRole(userId: string, role:string){
    this.usersService.changeRole(userId,role).then(() =>{
        this.user.role = role;
        this.viewCtrl.dismiss(this.user);
    });
  }

  modifyUser(user) {
    this.navCtrl.push(UserformPage, {user: user});
  }
}
