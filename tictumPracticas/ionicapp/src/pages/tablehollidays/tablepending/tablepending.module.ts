import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TablependingPage } from './tablepending';

@NgModule({
  declarations: [
    TablependingPage,
  ],
  imports: [
    IonicPageModule.forChild(TablependingPage),
  ],
  exports: [
    TablependingPage
  ]
})
export class TablependingPageModule {}
