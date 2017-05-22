import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {Roles} from '../../providers/roles';

@IonicPage()
@Component({
  selector: 'page-tableroles',
  templateUrl: 'tableroles.html',
})
export class TablerolesPage {

  roles: any;
  search: any;
  displayInput: boolean = false;
  displayButton: string = '';
  role: { rolename: string } = {rolename: ''};


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public rolesService: Roles,
              private alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.getAllRoles();
  }

  getAllRoles() {
    this.rolesService.getAllRoles().then((data) => {
      this.roles = data;
      this.search = this.roles;
    });
  }

  showInput() {
    this.role = {rolename:''};
    this.displayButton = 'add';
    this.displayInput = true;
  }

  closeInput() {
    this.role.rolename = '';
    this.displayInput = false;
    this.getAllRoles();
  }

  addRole() {
    if (this.role.rolename !== '') {
      this.rolesService.addRole(this.role).then(() => {
        this.closeInput();
        this.role.rolename = '';
        this.getAllRoles();
      });
    }

  }

  editRole(role) {
    this.role = role;
    this.displayButton = 'edit';
    this.displayInput = true;
  }

  updateRole() {
    if (this.role.rolename !== '') {
      this.rolesService.updateRole(this.role).then(() => {
        this.closeInput();
        this.role.rolename = '';
        this.getAllRoles();
      });
    }
  }


 deleteRole(roleId: String, index: number) {
    let confirm = this.alertCtrl.create({
      title: '¡Cuidado!',
      message: '¿Estas seguro de eliminar el rol?',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            this.rolesService.removeRole(roleId);
            this.roles.splice(index, 1);
          }
        },
        {
          text: 'No'
        }
      ]
    });
    confirm.present();
  }

  onInput(event) {
    let input = event.target.value;
    if (input && input.trim() != '') {
      this.search = this.roles.filter(role => {
        return (
        role.rolename.toLowerCase().indexOf(input.toLowerCase()) > -1 )
      });
    } else {
      this.search = this.roles;
    }
  }

}