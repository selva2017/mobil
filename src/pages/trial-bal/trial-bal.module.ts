import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrialBalPage } from './trial-bal';

@NgModule({
  declarations: [
    TrialBalPage,
  ],
  imports: [
    IonicPageModule.forChild(TrialBalPage),
  ],
})
export class TrialBalPageModule {}
