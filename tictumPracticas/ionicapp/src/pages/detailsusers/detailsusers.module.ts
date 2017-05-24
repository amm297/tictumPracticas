import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsusersPage } from './detailsusers';

@NgModule({
  declarations: [
    DetailsusersPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsusersPage),
  ],
  exports: [
    DetailsusersPage
  ]
})
export class DetailsusersPageModule {}
