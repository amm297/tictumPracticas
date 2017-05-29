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
  date = this.getFormatDate();

  constructor(public navCtrl: NavController, private app: App, private navParams: NavParams) {
    this.users = this.navParams.data;
  }

  onChangeDate() {
    this.getChecksByDate();
  }

  getChecksByDate() {
    let d = this.getFormatDate(true);
     for (let user of this.users) {
       for (let check of user.checking) {
         if (check.date == d) {
           console.log(check);
         }
       }
     }
  }

 

  getFormatDate(format?){
    let date :any;
    if(typeof this.date === "object"){
      date = this.date;
      let ret = date.month + "/" + date.day + "/" + date.year;
      console.log(ret);
      return ret;
    } 
    else{
      date = (format)? new Date(Date.parse(this.date)) : new Date();
      console.log(date);
      let day = date.getUTCDate().toString();
      let month = (date.getUTCMonth() + 1).toString();
      let year = date.getUTCFullYear();
      day = (day.length > 1) ? day:"0"+day ;
      month = (month.length > 1) ? month : "0"+month;
      let ret =  (format)? month + "/" + day + "/" + year : year+"-"+month+"-"+day;
      console.log(ret);
      return ret;
    }

  }

  

  back() {
    this.app.getRootNav().setRoot(AdminPage, {}, {
      animate: true,
      direction: 'back'
    })
  }

}
