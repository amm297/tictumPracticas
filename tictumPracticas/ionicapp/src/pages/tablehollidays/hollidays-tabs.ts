import {Component} from '@angular/core';
import {Users} from '../../providers/users';
import {NavController, NavParams} from 'ionic-angular';
import {TablehollidaysPage} from './tablehollidays';

@Component({
  selector: 'page-hollidaystabs',
  templateUrl: 'hollidays-tabs.html',
})
export class HollidaysTabsPage {
  tableHollidays = TablehollidaysPage;
  users;

  constructor(private usersService: Users, private navParams: NavParams) {
    this.users = this.navParams.data;
  }
}

