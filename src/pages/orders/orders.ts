import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { PopoverController, LoadingController, AlertController } from "ionic-angular";
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthService } from './../../providers/auth-service/auth-service';
import { Platform } from 'ionic-angular/platform/platform';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CustomerDetails } from '../../models/customer-details';
import { OrderData } from '../../models/order-data';

@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {
  customText: String = "Cm/Inch";
  category: string;

  items: {} = [
    '10 BF 100 GSM',
    '12 BF 100 GSM',
    '14 BF 120 GSM',
    '14 BF 140 GSM',
  ];
  sizes: {} = [
    '40 Inches',
    '50 Inches',
    '60 Inches',
    '65 Inches',
    '100 Inches',
  ];
  orderData: OrderData[] = [
    { date: "10-2-2018", item: "10 BF 100 GSM", size: "50 Inches", weight: "20", notes: "Urgent" },
    { date: "09-1-2018", item: "12 BF 100 GSM", size: "60 Inches", weight: "30", notes: "Normal" },
    { date: "1-12-2017", item: "14 BF 100 GSM", size: "70 Inches", weight: "10", notes: "Ordinary" },
    { date: "10-10-2017", item: "16 BF 100 GSM", size: "30 Inches", weight: "50", notes: "Urgent" },
    { date: "10-8-2017", item: "16 BF 140 GSM", size: "40 Inches", weight: "40", notes: "Urgent" },
  ];
  isToggledWeight: boolean = true;
  isToggledSize: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  notifyWeight(event) {
    this.isToggledWeight = !this.isToggledWeight;
    // console.log("Event: "+ event.checked); 
    // console.log("Toggled Weight: " + this.isToggledWeight);
  }
  notifySize(event) {
    this.isToggledSize = !this.isToggledSize;
    // console.log("Event: "+ event.checked); 
    // console.log("Toggled Size: " + this.isToggledSize);
  }
  ionViewDidEnter() {
    this.orderData.slice();
  }
  ngOnInit() {
    this.orderData.slice();
    this.category = 'order';
  }
  ionViewDidLoad() {
    this.orderData.slice();
    // console.log('ionViewDidLoad OrdersPage');
  }
  submitOrder(orders: OrderData) {

    // console.log(orders);
    // console.log(this.orderData);
    this.orderData.slice();
    this.orderData.push(orders);
    // console.log(this.orderData);
  }
  onChange(item) {
    // console.log(item);
  }
}