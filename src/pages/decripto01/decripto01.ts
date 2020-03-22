import { Decripto02Page } from './../decripto02/decripto02';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-decripto01',
  templateUrl: 'decripto01.html',
})
export class Decripto01Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Decripto01Page');
  }

  avancaDecripto02() {
    this.navCtrl.push(Decripto02Page);
  }
}
