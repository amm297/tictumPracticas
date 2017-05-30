import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {GenericProvider} from '../../providers/generic';

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
  role;
  oldRolename;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public service: GenericProvider,
              private alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.getAllRoles();
  }

  getAllRoles() {
    let loading = this.service.createLoading('Cargando roles');
    loading.present();
    this.service.getAllRoles().then((data) => {
      this.roles = data;
      this.search = this.roles;
      loading.dismiss();
    });
  }

  showInput() {
    this.role.rolename = this.oldRolename;
    this.role = {rolename: ''};
    this.displayButton = 'add';
    this.displayInput = true;
  }

  closeInput() {
    this.role.rolename = this.oldRolename;
    this.displayInput = false;
  }

  addRole() {
    if (this.roleExists(this.role.rolename, 0)) {
      let alert = this.createAlert();
      alert.present();
    } else {
      if (this.role.rolename !== '') {
        this.service.addRole(this.role).then((data) => {
          this.roles.push(data);
          this.closeInput();
        });
      }
    }
  }

  editRole(role) {
    this.role = role;
    this.oldRolename = this.role.rolename;
    this.displayButton = 'edit';
    this.displayInput = true;
  }

  createAlert() {
    return this.alertCtrl.create({
      title: '¡Cuidado!',
      subTitle: 'Este rol ya existe',
      buttons: ['Ok']
    });
  }

  updateRole() {
    if (this.roleExists(this.role.rolename, 1)) {
      let alert = this.createAlert();
      alert.present();
    } else {
      if (this.role.rolename !== '') {
        this.service.updateRole(this.role).then(() => {
          this.displayInput = false;
        });
      }
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
            this.service.removeRole(roleId);
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
        role.rolename.toLowerCase().indexOf(input.toLowerCase()) > -1)
      });
    } else {
      this.search = this.roles;
    }
  }

  roleExists(rolename, times) {
    let found = this.roles.filter((roleCheck: any) => {
      return roleCheck.rolename == this.role.rolename;
    })
    return found.length > times;
  }
}
