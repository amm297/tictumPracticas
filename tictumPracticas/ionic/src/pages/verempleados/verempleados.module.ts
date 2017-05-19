import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VerEmpleados } from './verempleados';

@NgModule({
  declarations: [
    VerEmpleados,
  ],
  imports: [
    IonicPageModule.forChild(VerEmpleados),
  ],
  exports: [
    VerEmpleados
  ]
})
export class VerempleadosModule {}
