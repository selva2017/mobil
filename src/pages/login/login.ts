import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { AuthService } from './../../providers/auth-service/auth-service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loading: any;
  data: any;
  token: boolean = false;
  token_name: string;
  loginData = {
    email: '',
    password: '',
  };
  isAuthenticated = false;
  
  constructor(public navCtrl: NavController, public authService: AuthService, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {}

  
  doLogin(user) {
    this.showLoader();
    this.authService.login(this.loginData)
        .subscribe(
        success => {
            // console.log(success);
            
            if (success.statusMessage == "AUTH_SUCCESS") {
              this.token = true;
              this.token_name = success.token;
              localStorage.setItem('token', this.token_name);
              localStorage.setItem('role', success.role);
              // localStorage.setItem('companyName', success.companyName);
              localStorage.setItem('customerId', success.customerId);
              localStorage.setItem('companyId', success.companyId);
              localStorage.setItem('isAuthenticated', 'true');
              // console.log('Company Id -' + success.companyId);
              // console.log('Role -' + success.role);
              // this.isAuthenticated = true;
              this.navCtrl.setRoot(TabsPage);
              this.loading.dismiss();
            }
              else {
                this.token = false;
                // this.isAuthenticated = false;
                localStorage.setItem('isAuthenticated', 'false');
                this.loading.dismiss();
                // this.invalidLogin.emit(true);
            }
        },
        (error) => {
          this.loading.dismiss();
          this.presentToast(error);
        });
}
  // doLogin() {
  //   this.showLoader();
  //   this.authService.login(this.loginData).then((result) => {
  //     this.loading.dismiss();
  //     this.data = result;
  //     localStorage.setItem('token', this.data.access_token);
  //     this.navCtrl.setRoot(TabsPage);
  //   }, (err) => {
  //     this.loading.dismiss();
  //     this.presentToast(err);
  //   });
  // }

  register() {
    this.navCtrl.push(RegisterPage);
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Authenticating...'
    });

    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      // console.log('Dismissed toast');
    });

    toast.present();
  }

}