<<<<<<< HEAD
import {Component, OnInit} from '@angular/core';
=======
import {Component} from '@angular/core';
>>>>>>> master
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
<<<<<<< HEAD
   users: any = [];
   search: any; 
  shownGroup;
=======
  users: any = [];
   search: any; 
 
>>>>>>> master

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              private usersService: Users,
              private alertCtrl: AlertController) {
    this.loadUsers();
<<<<<<< HEAD
    this.search = this.users;
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

  ngOnInit() {
    this.usersService.getAllUsers().then((data) => {
      this.users = data;
      this.search = this.users;
      console.log(this.users);
    });
  }

  deleteUser(userId: String, index: number) {
=======
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
>>>>>>> master
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
<<<<<<< HEAD
  }
=======
  }*/

 
>>>>>>> master

  onInput(event) {
    let input = event.target.value;
    if (input && input.trim() != '') {
      this.search = this.users.filter(user => {
        return (
        user.name.toLowerCase().indexOf(input.toLowerCase()) != -1 ||
        user.dni.indexOf(input) > -1 ||
        user.email.toLowerCase().indexOf(input.toLowerCase()) > -1 ||
<<<<<<< HEAD
        user.role.toLowerCase().indexOf(input.toLowerCase()) > -1 ||
        user.lastname.toLowerCase().indexOf(input.toLowerCase()) > -1)
=======
        user.role.toLowerCase().indexOf(input.toLowerCase()) > -1 )
>>>>>>> master
      });
    } else {
      this.search = this.users;
    }
  }

<<<<<<< HEAD
//Display users
openModal(user){
=======
  openModal(user){
>>>>>>> master
    console.log('Usuario de la Ventana Modal ' , user);
    // create the modal
    let profileModal = this.modalCtrl.create(DetailsusersPage, {user});
    // open the new modal
    profileModal.present();
  }
}

//   toggleGroup(group) {
//     if (this.isGroupShown(group)) {
//       this.shownGroup = null;
//     } else {
//       this.shownGroup = group;
//     }
//   };

//   isGroupShown(group) {
//     return this.shownGroup === group;
//   };
// }
