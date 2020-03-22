import { Decripto04Page } from './../decripto04/decripto04';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Decripto03Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-decripto03',
  templateUrl: 'decripto03.html',
})
export class Decripto03Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  avancaDecripto04() {
    this.navCtrl.push(Decripto04Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Decripto03Page');
  }

}
