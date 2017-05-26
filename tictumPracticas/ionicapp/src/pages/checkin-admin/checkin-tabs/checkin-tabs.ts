import { Component } from '@angular/core';
import { CheckintablePage } from "../checkintable/checkintable";
import { CheckinmapPage } from "../checkinmap/checkinmap";
import { Users } from '../../../providers/users';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-chenckintabs',
  template: `
    <ion-tabs>
      <ion-tab [root]="checkintablePage" tabTitle="Lista" tabIcon="list-box"></ion-tab>
      <ion-tab [root]="checkinmapPage" tabTitle="Mapa" tabIcon="globe"></ion-tab>
    </ion-tabs>
  `
})
export class CheckinTabsPage {
  checkintablePage = CheckintablePage;
  checkinmapPage = CheckinmapPage;
}
