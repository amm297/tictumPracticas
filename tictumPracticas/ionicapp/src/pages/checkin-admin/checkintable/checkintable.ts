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
  search:any;

  constructor(public navCtrl: NavController,
              private app: App,
              private navParams: NavParams,
              private checkingService: Checking) {
    this.users = this.navParams.data;

  }

  onInput(event) {
    let input = event.target.value;
    if (input && input.trim() != '') {
      this.search = this.checksDisplay.filter(user => {
        return (
        user.name.toLowerCase().indexOf(input.toLowerCase()) != -1 ||        
        user.lastname.toLowerCase().indexOf(input.toLowerCase()) > -1 )
      });
    } else {
      this.search = this.checksDisplay;
    }
  }

  onChangeDate() {
    this.checksDisplay = this.checkingService.getChecksByDate(this.users, this.date);
    this.search = this.checksDisplay;

  }

  back() {
    this.app.getRootNav().setRoot(AdminPage, {}, {
      animate: true,
      direction: 'back'
    })
  }



}
