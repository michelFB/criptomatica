import { Decripto06Page } from './../decripto06/decripto06';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Decripto05Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-decripto05',
  templateUrl: 'decripto05.html',
})
export class Decripto05Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  avancaDecripto06() {
    this.navCtrl.push(Decripto06Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Decripto05Page');
  }

}
