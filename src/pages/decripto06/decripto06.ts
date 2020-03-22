import { Decripto07Page } from './../decripto07/decripto07';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Decripto06Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-decripto06',
  templateUrl: 'decripto06.html',
})
export class Decripto06Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  avancaDecripto07() {
    this.navCtrl.push(Decripto07Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Decripto06Page');
  }

}
