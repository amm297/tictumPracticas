import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Añadimos el servicio.
import { Empleado } from '../../providers/empleado';

/**
 * Generated class for the CrearEmpleado page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-crearempleado',
  templateUrl: 'crearempleado.html',
})
export class CrearEmpleado {

  lastname:any;
  dni:any;
  name:any;
  address:any;
  country:any;
  phone:any;
  email:any;
  password:any;
  role:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public  empleado: Empleado) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearEmpleado');
  }

  crearempleado(){
  	let empleado={
      lastname: this.lastname,
   	  dni: this.dni,
      name:this.name,
      address:this.address,
      country:this.country,
      phone:this.phone,
      email:this.email,
      password:this.password,
      role:this.role
    }
  	this.empleado.crearempleado(empleado);
  }

  }
      