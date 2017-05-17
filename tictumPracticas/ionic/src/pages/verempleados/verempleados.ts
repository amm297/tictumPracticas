import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


//Añadimos el servicio.
import { Empleado } from '../../providers/empleado';


/**
 * Generated class for the VerEmpleados page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-verempleados',
  templateUrl: 'verempleados.html',
})
export class VerEmpleados {
empleados: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public  empleado: Empleado) {
  }

  ionViewDidLoad() {
    this.empleado.verempleados().then((data) => {
      console.log(data);
      this.empleados = data;
    });
  }
}
