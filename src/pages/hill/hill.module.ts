import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HillPage } from './hill';

@NgModule({
  declarations: [
    HillPage,
  ],
  imports: [
    IonicPageModule.forChild(HillPage),
  ],
})
export class HillPageModule {}
