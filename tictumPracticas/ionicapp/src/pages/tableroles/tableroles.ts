import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Roles} from '../../providers/roles';

@IonicPage()
@Component({
  selector: 'page-tableroles',
  templateUrl: 'tableroles.html',
})
export class TablerolesPage {

  roles: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private rolesService: Roles) {
  }

  ngOnInit() {
    this.getRoleList();
  }

  getRoleList() {
    this.rolesService.getAllRoles().then((data) => {
      this.roles = data;
      console.log(this.roles);
    });
  }

}
