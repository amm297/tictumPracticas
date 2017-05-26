import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckinmapPage } from './checkinmap';

@NgModule({
  declarations: [
    CheckinmapPage,
  ],
  imports: [
    IonicPageModule.forChild(CheckinmapPage),
  ],
  exports: [
    CheckinmapPage
  ]
})
export class CheckinmapPageModule {}
