import {Component} from '@angular/core';
import {TableaprovedPage} from '../tableaproved/tableaproved';
import {TabledeniedPage} from '../tabledenied/tabledenied';
import {TablependingPage} from '../tablepending/tablepending';
@Component({
  selector: 'page-hollidaystabs',
  template: `
    <ion-tabs selectedIndex="1">
      <ion-tab [root]="tableAprovedPage" tabTitle="Aprovadas" tabIcon="checkbox-outline"></ion-tab>
      <ion-tab [root]="tablePendingPage" tabTitle="Pendientes" tabIcon="help"></ion-tab>
      <ion-tab [root]="tableDeniedPage" tabTitle="Denegadas" tabIcon="close"></ion-tab>
    </ion-tabs>
  `
})
export class HollidaysTabsPage {
  tableAprovedPage = TableaprovedPage;
  tableDeniedPage = TabledeniedPage;
  tablePendingPage = TablependingPage;
}
