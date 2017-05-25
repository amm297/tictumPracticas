import { Component } from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {AdminPage} from "../../admin/admin";

@IonicPage()
@Component({
  selector: 'page-checkintable',
  templateUrl: 'checkintable.html',
})
export class CheckintablePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private app: App) {
  }

  back(){
    this.app.getRootNav().setRoot(AdminPage,{},{
      animate:true,
      direction:'back'
    })
  }

}
