import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TableRole } from './table-role';

@NgModule({
  declarations: [
    TableRole,
  ],
  imports: [
    IonicPageModule.forChild(TableRole),
  ],
  exports: [
    TableRole
  ]
})
export class TableRoleModule {}
