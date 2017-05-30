import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabledeniedPage } from './tabledenied';

@NgModule({
  declarations: [
    TabledeniedPage,
  ],
  imports: [
    IonicPageModule.forChild(TabledeniedPage),
  ],
  exports: [
    TabledeniedPage
  ]
})
export class TabledeniedPageModule {}
