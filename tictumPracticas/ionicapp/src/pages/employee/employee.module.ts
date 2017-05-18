import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Employee } from './employee';

@NgModule({
  declarations: [
    Employee,
  ],
  imports: [
    IonicPageModule.forChild(Employee),
  ],
  exports: [
    Employee
  ]
})
export class VerempleadosModule {}
