import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { AuthService } from './../../providers/auth-service/auth-service';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  loading: any;
  regData = { email: '', password: '', firstName: '', lastName:'',confirmPassword: '', companyId: '',userType: '',customerName: '',customerId:'' };
  error_message: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService, 
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController, private toastCtrl: ToastController) { }

  doSignup(user) {
    var valid_password: boolean = false;
    this.showLoader();
    ((this.regData.password === this.regData.confirmPassword) && (this.regData.companyId !== null)) ? valid_password = true : this.error_message = "Password does not match";
    if (valid_password) {
      this.authService.register(this.regData)
        .subscribe(
        success => {
          // console.log(success);
          this.regData.email = "";
          this.regData.password= "";
          this.regData.firstName = "";
          this.regData.lastName= "";
          this.regData.confirmPassword= "";
          this.regData.companyId= "";
          this.loading.dismiss();
          this.handleError("success");         
        },
        (error) => {
          this.loading.dismiss();
          this.presentToast(error);
        });
      this.error_message = "";
    }
    else {
      // alert("Invalid password")
      this.loading.dismiss();
    }

  }

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Registering the user...'
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
  private handleError(errorMessage: string) {
    const alert = this.alertCtrl.create({
      // title: "",
      subTitle: "User Registration is successful!",
      buttons: ['Ok'],
    });
    alert.present();
  }
}