import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckintablePage } from './checkintable';

@NgModule({
  declarations: [
    CheckintablePage,
  ],
  imports: [
    IonicPageModule.forChild(CheckintablePage),
  ],
  exports: [
    CheckintablePage
  ]
})
export class CheckintablePageModule {}
