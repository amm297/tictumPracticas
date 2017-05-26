import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, ModalController} from 'ionic-angular';
import {Users} from "../../providers/users";
import {DetailsusersPage} from "../detailsusers/detailsusers";

@IonicPage()
@Component({
  selector: 'page-tableusers',
  templateUrl: 'tableusers.html',
})
export class TableusersPage {

  private page: number = 1;
  users: any = [];
  search: any;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              private usersService: Users,
              private alertCtrl: AlertController) {
    this.loadUsers();
  }

  loadUsers() {
    let loading = this.usersService.createLoading('Cargando usuarios');
    loading.present();
    return new Promise(resolve => {
      this.usersService.load(this.page)
        .then(data => {
          console.log(data);
          for(let user of data['docs']) {
            this.users.push(user);
          }
          this.search = this.users;
          loading.dismiss();
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



  onInput(event) {
    let input = event.target.value;
    if (input && input.trim() != '') {
      this.search = this.users.filter(user => {
        return (
        user.name.toLowerCase().indexOf(input.toLowerCase()) != -1 ||
        user.dni.indexOf(input) > -1 ||
        user.email.toLowerCase().indexOf(input.toLowerCase()) > -1 ||
        user.role.toLowerCase().indexOf(input.toLowerCase()) > -1 )
      });
    } else {
      this.search = this.users;
    }
  }

  openModal(user){
    // create the modal
    let profileModal = this.modalCtrl.create(DetailsusersPage, {user});
    // open the new modal
    profileModal.present();
    profileModal.onWillDismiss((user)=>{
      if(user){
        const position = this.users.findIndex((userSearch) => {
          return userSearch._id == user._id;
        });
        this.users[position] = user;
      }
    });
  }
}
