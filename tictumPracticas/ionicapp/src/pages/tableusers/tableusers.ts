import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Users} from "../../providers/users";

@IonicPage()
@Component({
  selector: 'page-tableusers',
  templateUrl: 'tableusers.html',
})
export class TableusersPage implements OnInit {

  users:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private usersService: Users) {
  }

  ngOnInit() {
    this.usersService.getAllUsers().then((data) => {
      this.users = data;
      console.log(this.users);
    });
  }
}
