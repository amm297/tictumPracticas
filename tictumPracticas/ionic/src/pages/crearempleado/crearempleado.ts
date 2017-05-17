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
    name: '';
    lastname: '';
    email: '';
    password: '';
    role: '';
    dni: '';
    address: '';
    country: '';
    phone: ''
  constructor(public navCtrl: NavController, public navParams: NavParams, public  empleado: Empleado) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearEmpleado');
  }

  crearempleado(){
  	let empleado={

      name:this.name,
      lastname:this.lastname,
      email:this.email,
      password:this.password,
      role:this.role,
      dni: this.dni,
      address:this.address,
      country:this.country,
      phone:this.phone,
      
    }
  	this.empleado.crearempleado(empleado);
  }

  }
