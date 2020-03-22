import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeterminantePage } from './determinante';

@NgModule({
  declarations: [
    DeterminantePage,
  ],
  imports: [
    IonicPageModule.forChild(DeterminantePage),
  ],
})
export class DeterminantePageModule {}
