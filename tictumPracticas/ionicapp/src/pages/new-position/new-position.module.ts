import { NgModule } from '@angular/core'; 
import { IonicPageModule } from 'ionic-angular'; 
import { NewPositionPage } from './new-position'; 
 
@NgModule({ 
  declarations: [ 
    NewPositionPage, 
  ], 
  imports: [ 
    IonicPageModule.forChild(NewPositionPage), 
  ], 
  exports: [ 
    NewPositionPage 
  ] 
}) 
export class NewPositionPageModule {} 