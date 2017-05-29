import {Component} from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {AdminPage} from "../../admin/admin";
import {Users} from '../../../providers/users';
import {Checking} from '../../../providers/checking';

@IonicPage()
@Component({
  selector: 'page-checkintable',
  templateUrl: 'checkintable.html',
})
export class CheckintablePage {

  users: any = [];
  date = new Date().toISOString();
  checksDisplay;

  constructor(public navCtrl: NavController,
              private app: App,
              private navParams: NavParams,
              private checkingService: Checking) {
    this.users = this.navParams.data;
  }

  onChangeDate() {
    this.checksDisplay = this.checkingService.getChecksByDate(this.users, this.date);
  }

  back() {
    this.app.getRootNav().setRoot(AdminPage, {}, {
      animate: true,
      direction: 'back'
    })
  }

}
