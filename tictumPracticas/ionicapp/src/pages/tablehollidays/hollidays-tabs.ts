import {Component} from '@angular/core';
import {Users} from '../../providers/users';
import {NavController, NavParams} from 'ionic-angular';
import {TablehollidaysPage} from './tablehollidays';

@Component({
  selector: 'page-hollidaystabs',
  template: `
    <ion-tabs selectedIndex="1">
      <ion-tab [root]="tableHollidays" [rootParams]="{users:users,status:'denied'}" color="denied" tabTitle="Denegadas"
               tabIcon="thumbs-down"></ion-tab>
      <ion-tab [root]="tableHollidays" [rootParams]="{users:users,status:'pending'}" tabTitle="Pendientes"
               tabIcon="help"></ion-tab>
      <ion-tab [root]="tableHollidays" [rootParams]="{users:users,status:'aproved'}" tabTitle="Aprobadas"
               tabIcon="thumbs-up"></ion-tab>
    </ion-tabs>
  `
})
export class HollidaysTabsPage {
  tableHollidays = TablehollidaysPage;
  users;

  constructor(private usersService: Users, private navParams: NavParams) {
    this.users = this.navParams.data;
  }
}

