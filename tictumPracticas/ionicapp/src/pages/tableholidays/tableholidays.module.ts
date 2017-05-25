import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TableholidaysPage } from './tableholidays';

@NgModule({
  declarations: [
    TableholidaysPage,
  ],
  imports: [
    IonicPageModule.forChild(TableholidaysPage),
  ],
  exports: [
    TableholidaysPage
  ]
})
export class TableholidaysPageModule {}
