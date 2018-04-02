import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DayBookDetailsPage } from './day-book-details';

@NgModule({
  declarations: [
    DayBookDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(DayBookDetailsPage),
  ],
})
export class DayBookDetailsPageModule {}
