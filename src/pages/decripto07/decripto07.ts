import { Decripto08Page } from './../decripto08/decripto08';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Decripto07Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-decripto07',
  templateUrl: 'decripto07.html',
})
export class Decripto07Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  avancaDecripto08() {
    this.navCtrl.push(Decripto08Page);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Decripto07Page');
  }

}
