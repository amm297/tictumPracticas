import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GenericPasswordPage } from './generic-password';

@NgModule({
  declarations: [
    GenericPasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(GenericPasswordPage),
  ],
  exports: [
    GenericPasswordPage
  ]
})
export class GenericPasswordPageModule {}
