import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserformPage } from './userform';

@NgModule({
  declarations: [
    UserformPage,
  ],
  imports: [
    IonicPageModule.forChild(UserformPage),
  ],
  exports: [
    UserformPage
  ]
})
export class UserformPageModule {}
