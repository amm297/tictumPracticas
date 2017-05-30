import { Component } from '@angular/core';
import { CheckintablePage } from "../checkintable/checkintable";
import { CheckinmapPage } from "../checkinmap/checkinmap";
import {NavParams} from 'ionic-angular';

@Component({
  selector: 'page-chenckintabs',
  template: `
    <ion-tabs>
      <ion-tab [root]="checkintablePage" [rootParams]="users" tabTitle="Lista" tabIcon="list-box"></ion-tab>
      <ion-tab [root]="checkinmapPage" [rootParams]="users" tabTitle="Mapa" tabIcon="globe"></ion-tab>
    </ion-tabs>
  `
})
export class CheckinTabsPage {
  users;
  checkintablePage = CheckintablePage;
  checkinmapPage = CheckinmapPage;

  constructor(private navParams: NavParams) {
    this.users = this.navParams.data;
  }
}
