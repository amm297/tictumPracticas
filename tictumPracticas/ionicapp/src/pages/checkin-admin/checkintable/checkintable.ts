import {Component} from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {AdminPage} from "../../admin/admin";
import {Users} from '../../../providers/users';

@IonicPage()
@Component({
  selector: 'page-checkintable',
  templateUrl: 'checkintable.html',
})
export class CheckintablePage {

  users: any = [];
  date = new Date().toISOString();

  constructor(public navCtrl: NavController, private app: App, private navParams: NavParams) {
    this.users = this.navParams.data;
    console.log(this.users);
    console.log(this.date);
  }

  onChangeDate() {
    // this.getChecksByDate();
  }

  getChecksByDate() {
    console.log(this.getFormattedDate());
    // for (let user of this.users) {
    //   for (let check of user.checking) {
    //     if (check.date == this.getFormattedDate()) {
    //       console.log(check);
    //     }
    //   }
    // }
  }

  getFormattedDate() {
    // let year = this.date["year"];
    // let month = this.date["month"];
    // month = month.length > 1 ? month : '0' + month;
    // let day = this.date["day"];
    // day = day.length > 1 ? day : '0' + day;
    // return month + '/' + day + '/' + year;
  }

  back() {
    this.app.getRootNav().setRoot(AdminPage, {}, {
      animate: true,
      direction: 'back'
    })
  }

}
