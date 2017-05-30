import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, ModalController} from 'ionic-angular';
import {GenericProvider} from "../../providers/generic";
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
  orderField : string = '';
  orderType : boolean = true;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              private service: GenericProvider,
              private alertCtrl: AlertController) {

    let loading = this.service.createLoading('Cargando usuarios');
    loading.present();
    this.loadUsers().then(_=>{
      loading.dismiss();
    });
  }

  loadUsers() {
    return new Promise(resolve => {
      this.service.load(this.page)
        .then(data => {
          console.log(data);
          for(let user of data['docs']) {
            this.users.push(user);
          }
          this.search = this.users;
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

  onOrderUsers(event){//Falta añadir orden descendente
     let or = (this.orderType)? 1 : -1;
    this.search.sort(function(a, b) {
      var nameA = a[event.value].toUpperCase(); // ignore upper and lowercase
      var nameB = b[event.value].toUpperCase(); // ignore upper and lowercase
      return (nameA <= nameB) ? (-1 *or) : (1*or);
    });
  }


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
