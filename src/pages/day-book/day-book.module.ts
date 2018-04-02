import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DayBookPage } from './day-book';

@NgModule({
  declarations: [
    DayBookPage,
  ],
  imports: [
    IonicPageModule.forChild(DayBookPage),
  ],
})
export class DayBookPageModule {}
