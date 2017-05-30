import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import {GenericProvider} from "../../providers/generic";
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
          private service: GenericProvider,
          private alertCtrl: AlertController) {

  	console.log('Constructor de la Ventana Modal: ' , this.navParams.get("user"));
  	this.user = this.navParams.get("user");
  }

  deleteUser(userId: String) { //, index: number
    let confirm = this.alertCtrl.create({
      title: 'Cuidado!',
      message: '¿Estas seguro de eliminar el usuario?',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            this.service.deleteUser(userId);
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
    this.service.changeRole(userId,role).then(() =>{
        this.user.role = role;
        this.viewCtrl.dismiss(this.user);
    });
  }

  modifyUser(user) {
    this.navCtrl.push(UserformPage, {user: user});
  }
}
