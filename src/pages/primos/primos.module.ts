import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrimosPage } from './primos';

@NgModule({
  declarations: [
    PrimosPage,
  ],
  imports: [
    IonicPageModule.forChild(PrimosPage),
  ],
})
export class PrimosPageModule {}
