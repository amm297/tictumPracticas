import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, ModalController} from 'ionic-angular';
import {Users} from "../../providers/users";
import {UserformPage} from '../userform/userform';
import {DetailsusersPage} from "../detailsusers/detailsusers";

@IonicPage()
@Component({
  selector: 'page-tableusers',
  templateUrl: 'tableusers.html',
})
export class TableusersPage {

  private page: number = 1;
  users: any = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              private usersService: Users,
              private alertCtrl: AlertController) {
    this.loadUsers();
  }

  loadUsers() {
    return new Promise(resolve => {
      this.usersService.load(this.page)
        .then(data => {
          console.log(data);
          for(let user of data['docs']) {
            this.users.push(user);
          }
          console.log(this.users);
          resolve(true);
        });
    })
  }

  doInfinite(inifiniteScroll: any) {
    this.page++;
    this.loadUsers().then(() => {
      inifiniteScroll.complete();
    });
  }

  /*deleteUser(userId: String, index: number) {
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
  }*/


  openModal(user){
    console.log('Usuario de la Ventana Modal ' , user);
    // create the modal
    let profileModal = this.modalCtrl.create(DetailsusersPage, {user});
    // open the new modal
    profileModal.present();
  }
}
