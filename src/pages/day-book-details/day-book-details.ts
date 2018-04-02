import { AuthService } from './../../providers/auth-service/auth-service';
import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { AlertController } from "ionic-angular";

import { Daybook } from './../../models/daybook';
import { DayBookPage } from '../day-book/day-book';

@Component({
  selector: 'page-day-book-details',
  templateUrl: 'day-book-details.html',
})
export class DayBookDetailsPage {
  dayBookList: Daybook[];
  companyId: string;
  dayBookPage = DayBookPage;
  role: String;

  constructor(
    private navParams: NavParams,
    private authService: AuthService,
    private alertCtrl: AlertController,
  ) { }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad DayBook details');
    this.companyId = localStorage.getItem('companyId');
    this.role = localStorage.getItem('role');
  }

  onRemoveFromList(key: String) {
    console.log("item" + key);
    this.authService.hideDayBookRow(key)
      .subscribe(
      // (res: Daybook) => console.log(res),
      (success) => {
        console.log("success");
      },
      (error) => console.log(error)
      );
  }

  ngOnInit() {
    this.dayBookList = this.navParams.data;
  }

  displayINR(amount: number) {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount);
  }

}
