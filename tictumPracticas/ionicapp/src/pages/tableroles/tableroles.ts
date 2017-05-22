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
  search: any;
  displayInput: boolean = false;
  displayButton: string = '';
  role: { rolename: string } = {rolename: ''};


  constructor(public navCtrl: NavController, public navParams: NavParams, public rolesService: Roles) {
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

<<<<<<< HEAD
  showInput(){
    this.role={rolename:''};
    console.log(this.role);

=======
  showInput() {
>>>>>>> paula
    this.displayButton = 'add';
    this.displayInput = true;

    console.log("vamos a añadir");
  }

  closeInput() {
    this.role.rolename = '';
    this.displayInput = false;
    this.getAllRoles();
  }

<<<<<<< HEAD
  addRole(){

   var insert = false;
   insert = this.compareRolename();
   

 /*   for(let role of this.roles){
        console.log(role.rolename);
        if(this.role.rolename == role.rolename){
          alert('Este rol ya existe');
          exist = true;          
        }
=======
  addRole() {
    if (this.role.rolename !== '') {
      this.rolesService.addRole(this.role).then(() => {
        this.closeInput();
        this.role.rolename = '';
        this.getAllRoles();
      });
>>>>>>> paula
    }
*/

    if(insert==false){
      if(this.role.rolename !== ''){ //si rolename no está vacío, añado nuevo rol
        this.rolesService.addRole(this.role).then(()=>{
        this.closeInput();
      });
      console.log("he añadido");
      }
    }
  }

<<<<<<< HEAD

  editRole(role){
    //console.log("estamos editando");
    this.role = role;    
=======
  editRole(role) {
    this.role = role;
>>>>>>> paula
    this.displayButton = 'edit';
    this.displayInput = true;
  }

<<<<<<< HEAD
  updateRole(){
    var insert = false;

  //  insert = this.compareRolename(this.role.rolename);

  //  if(insert == false){
        if(this.role.rolename !== ''){
          this.rolesService.updateRole(this.role).then(()=>{
            this.closeInput();
            this.role.rolename='';
            this.getAllRoles();
          });
        }
 //   }
  }


  compareRolename(){
  var exist: boolean = false;    

      for(var _i = 0; _i < this.roles.length && exist==false; _i++){
          console.log(this.roles[_i].rolename);

          if(this.role.rolename == this.roles[_i].rolename){
            alert('Este rol ya existe');
            exist = true;          
          }
      }
      return exist;
  }



  deleteRole(role){
   this.rolesService.removeRole(role).then(()=>{
=======
  updateRole() {
    if (this.role.rolename !== '') {
      this.rolesService.updateRole(this.role).then(() => {
        this.closeInput();
        this.role.rolename = '';
        this.getAllRoles();
      });
    }
  }

  deleteRole(role) {
    this.rolesService.removeRole(role).then(() => {
>>>>>>> paula
      this.getAllRoles();
    });
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
