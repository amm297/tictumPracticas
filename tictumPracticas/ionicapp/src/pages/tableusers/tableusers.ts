import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {Users} from "../../providers/users";
import {UserformPage} from '../userform/userform';

@IonicPage()
@Component({
  selector: 'page-tableusers',
  templateUrl: 'tableusers.html',
})
export class TableusersPage implements OnInit {

  users: any;
  search:any;
  field: string;
  order: string;

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

  showOrderedUsers(field,order){
    console.log(field);
    console.log(order);
  
    if (order == 'true' && field=='email') {
      console.log(order);
      this.search.sort(function(a, b) {
        var nameA = a.email.toUpperCase(); // ignore upper and lowercase
        var nameB = b.email.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
    }else if (order == 'false' && field=='email') {
      this.search.sort(function(a, b) {
        var nameA = a.email.toUpperCase(); // ignore upper and lowercase
        var nameB = b.email.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        // names must be equal
        return 0;
      });
    }
  
 if (order == 'true' && field=='dni') {
      console.log(order);
      this.search.sort(function(a, b) {
        var nameA = a.dni.toUpperCase(); // ignore upper and lowercase
        var nameB = b.dni.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
    }else if (order == 'false' && field=='dni') {
      this.search.sort(function(a, b) {
        var nameA = a.dni.toUpperCase(); // ignore upper and lowercase
        var nameB = b.dni.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        // names must be equal
        return 0;
      });
    }


 if (order == 'true' && field=='phone') {
      console.log(order);
      this.search.sort(function(a, b) {
        var nameA = a.phone.toUpperCase(); // ignore upper and lowercase
        var nameB = b.phone.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
    }else if (order == 'false' && field=='phone') {
      this.search.sort(function(a, b) {
        var nameA = a.phone.toUpperCase(); // ignore upper and lowercase
        var nameB = b.phone.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        // names must be equal
        return 0;
      });
    }


 if (order == 'true' && field=='country') {
      console.log(order);
      this.search.sort(function(a, b) {
        var nameA = a.country.toUpperCase(); // ignore upper and lowercase
        var nameB = b.country.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
    }else if (order == 'false' && field=='country') {
      this.search.sort(function(a, b) {
        var nameA = a.country.toUpperCase(); // ignore upper and lowercase
        var nameB = b.country.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        // names must be equal
        return 0;
      });
    }

 if (order == 'true' && field=='address') {
      console.log(order);
      this.search.sort(function(a, b) {
        var nameA = a.address.toUpperCase(); // ignore upper and lowercase
        var nameB = b.address.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
    }else if (order == 'false' && field=='address') {
      this.search.sort(function(a, b) {
        var nameA = a.address.toUpperCase(); // ignore upper and lowercase
        var nameB = b.address.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        // names must be equal
        return 0;
      });
    }


  }
}
