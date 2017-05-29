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
  strDate;

  constructor(public navCtrl: NavController,
              private app: App,
              private navParams: NavParams) {
    this.users = this.navParams.data;
  }

  onChangeDate() {
    this.getFormatDate();
  }

  getChecksByDate() {
    // for (let user of this.users) {
    //   for (let check of user.checking) {
    //     if (check.date == this.getFormattedDate()) {
    //       console.log(check);
    //     }
    //   }
    // }
  }

  getFormatDate(){
    let day,month,year;
    if(this.date['day']){
      day = this.date['day'];
      month = this.date['month'];
      year = this.date['year'];
    }else{
      let today = new Date();
      day = today.getUTCDate();
      month = today.getUTCMonth();
      year = today.getUTCFullYear();
    }
    if(day<10) day = "0"+day;
    if(month<10) month = "0"+month;
    this.strDate = month + "/" + day + "/" + year;
    console.log(this.strDate);
  }

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
