import { Decripto03Page } from './../decripto03/decripto03';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Decripto02Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-decripto02',
  templateUrl: 'decripto02.html',
})
export class Decripto02Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  avancaDecripto03() {
    this.navCtrl.push(Decripto03Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Decripto02Page');
  }

}
