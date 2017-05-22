import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Checks } from '../../providers/checks';

@IonicPage()
@Component({
  selector: 'page-checking',
  templateUrl: 'checking.html',
})
export class CheckingPage implements OnInit{

	checks:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public checksService: Checks) {
  }
  ngOnInit() {
    this.checksService.getAllChecks().then((data) => {
      this.checks = data;
      console.log(this.checks);
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckingPage');
  }

}
