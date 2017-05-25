import {Component} from '@angular/core';
import {TableaprovedPage} from '../tableaproved/tableaproved';
import {TabledeniedPage} from '../tabledenied/tabledenied';
import {TablependingPage} from '../tablepending/tablepending';
import {Users} from '../../../providers/users';
import {NavController} from 'ionic-angular';
@Component({
  selector: 'page-hollidaystabs',
  template: `
    <ion-tabs selectedIndex="1">
      <ion-tab [root]="tableAprovedPage" [rootParams]="users" tabTitle="Aprovadas" tabIcon="checkbox-outline"></ion-tab>
      <ion-tab [root]="tablePendingPage" [rootParams]="users" tabTitle="Pendientes" tabIcon="help"></ion-tab>
      <ion-tab [root]="tableDeniedPage" [rootParams]="users" tabTitle="Denegadas" tabIcon="close"></ion-tab>
    </ion-tabs>
  `
})
export class HollidaysTabsPage {
  tableAprovedPage = TableaprovedPage;
  tableDeniedPage = TabledeniedPage;
  tablePendingPage = TablependingPage;

  users;

  constructor(private usersService: Users, private navCtrl:NavController) {
    this.usersService.getAllUsers().then((data) => {
      this.users = data['docs'];
    });
  }
}
