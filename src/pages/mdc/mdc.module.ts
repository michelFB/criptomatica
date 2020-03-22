import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MdcPage } from './mdc';

@NgModule({
  declarations: [
    MdcPage,
  ],
  imports: [
    IonicPageModule.forChild(MdcPage),
  ],
})
export class MdcPageModule {}
