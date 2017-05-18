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
  displayInput: boolean = false;
  displayButton: string = '';
  role:{rolename:string} = {rolename:''};
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public rolesService: Roles) {
  }

  ngOnInit() {
    this.getAllRoles();
  }

  getAllRoles() {
    this.rolesService.getAllRoles().then((data) => {
      this.roles = data;
    });
  }
  
  showInput(){
    this.displayButton = 'add';
    this.displayInput = true;
  }
  closeInput(){
    this.displayInput = false;
    this.getAllRoles();
  }

  addRole(){
    if(this.role.rolename !== ''){
      this.rolesService.addRole(this.role).then(()=>{ 
      this.closeInput();
      this.role.rolename ='';
      this.getAllRoles(); 
      });
    }
     
  }

  editRole(role){
    this.role = role;
    this.displayButton = 'edit';
    this.displayInput = true;
  }

  updateRole(){
     if(this.role.rolename !== ''){
      this.rolesService.updateRole(this.role).then(()=>{ 
        this.closeInput();
        this.role.rolename='';     
        this.getAllRoles(); 
      });
    }
  }
  deleteRole(role){
   this.rolesService.removeRole(role).then(()=>{ 
      this.getAllRoles(); 
    });
  }

}
