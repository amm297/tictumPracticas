import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrearEmpleado } from './crearempleado';

@NgModule({
  declarations: [
    CrearEmpleado,
  ],
  imports: [
    IonicPageModule.forChild(CrearEmpleado),
  ],
  exports: [
    CrearEmpleado
  ]
})
export class CrearEmpleadoModule {}
