import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TablerolesPage } from './tableroles';

@NgModule({
  declarations: [
    TablerolesPage,
  ],
  imports: [
    IonicPageModule.forChild(TablerolesPage),
  ],
  exports: [
    TablerolesPage
  ]
})
export class TablerolesPageModule {}
