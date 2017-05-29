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
  date = this.getFormattedDate();

  

  constructor(public navCtrl: NavController, private app: App, private navParams: NavParams) {
    this.users = this.navParams.data;
    console.log(this.users);
    console.log(this.date);
  }

  onChangeDate() {
    this.getChecksByDate();
    console.log(this.date);
  }

  getChecksByDate() {
     console.log(this.users);
     console.log(this.getFormattedDate(true));
     for (let user of this.users) {
       for (let check of user.checking) {
         if (check.date == this.getFormattedDate(true)) {
           console.log(check);
         }
       }
     }
  }

   getFormattedDate(format?) {
      let date = new Date();
      let year = date.getFullYear();
      let month = (1 + date.getMonth()).toString();
      month = month.length > 1 ? month : '0' + month;
      let day = date.getDate().toString();
      day = day.length > 1 ? day : '0' + day;

      //2017-05-29T14:57:10.361Z
      if(format) return month + '/' + day + '/' + year;
      return year+"-"+month+"-"+day+"T00:00:00.000Z";
    }

  back() {
    this.app.getRootNav().setRoot(AdminPage, {}, {
      animate: true,
      direction: 'back'
    })
  }

}
