import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Roles } from '../../providers/roles';


/**
 * Generated class for the TablerolesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tableroles',
  templateUrl: 'tableroles.html',
})
export class TablerolesPage {
roles: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private roleService: Roles) {
  }
  
  ngOnInit() {
	  this.getRoleList();
  }
  
  getRoleList() {
	  this.roleService.getAllRoles().then((res) => {
		  this.roles = res;
	  }, (err) => {
		  console.log(err);
	  });
  }

}
