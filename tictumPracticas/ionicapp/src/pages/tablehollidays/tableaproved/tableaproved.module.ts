import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TableaprovedPage } from './tableaproved';

@NgModule({
  declarations: [
    TableaprovedPage,
  ],
  imports: [
    IonicPageModule.forChild(TableaprovedPage),
  ],
  exports: [
    TableaprovedPage
  ]
})
export class TableaprovedPageModule {}
