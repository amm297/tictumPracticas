import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TablehollidaysPage } from './tablehollidays';

@NgModule({
  declarations: [
    TablehollidaysPage,
  ],
  imports: [
    IonicPageModule.forChild(TablehollidaysPage),
  ],
  exports: [
    TablehollidaysPage
  ]
})
export class TablehollidaysPageModule {}
