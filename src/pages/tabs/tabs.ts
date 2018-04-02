// import { StatisticsPage } from './../statistics/statistics';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { TrialBalPage } from '../trial-bal/trial-bal';
import { DayBookPage } from '../day-book/day-book';
import { OrdersPage } from '../orders/orders';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  homePage: any = HomePage;
  // tab2Root: any = AboutPage;
  // tab3Root: any = ContactPage;
  trialBalPage = TrialBalPage;
  dayBookPage = DayBookPage;
  ordersPage = OrdersPage;
  // statisticsPage = StatisticsPage;
  role: string;

  constructor(public navCtrl: NavController) {
    if (!localStorage.getItem("token")) {
      navCtrl.setRoot(LoginPage);
    }
  }
  ionViewDidEnter() {
    this.role = localStorage.getItem('role');
    // console.log(this.role);
  }
}
