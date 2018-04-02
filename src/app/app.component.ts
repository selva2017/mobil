import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { AuthService } from '../providers/auth-service/auth-service';
import { HomePage } from '../pages/home/home';
import { DayBookPage } from '../pages/day-book/day-book';
// import { StatisticsPage } from './../pages/statistics/statistics';
import { RegisterPage } from './../pages/register/register';
import { LoginPage } from './../pages/login/login';
import { OrdersPage } from '../pages/orders/orders';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage: any = TabsPage;
  loginPage = LoginPage;
  registerPage = RegisterPage;
  dayBookPage = DayBookPage;
  OrdersPage = OrdersPage;
  // statisticsPage = StatisticsPage;

  isAuthenticated: boolean;
  
  @ViewChild('nav') nav: NavController;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private menuCtrl: MenuController,  public authService: AuthService) {
      platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    if (localStorage.getItem('isAuthenticated') === 'true')
      this.isAuthenticated = true;
     else
    this.isAuthenticated = false;
  }
  
  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
    if (localStorage.getItem('isAuthenticated') === 'true')
      this.isAuthenticated = true;
     else
    this.isAuthenticated = false;
  }
  onLogout() {
    this.authService.logout();
    this.menuCtrl.close();
    this.nav.setRoot(LoginPage);
    return localStorage.clear();
  }

}
