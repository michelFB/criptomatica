import { Decripto05Page } from './../decripto05/decripto05';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Decripto04Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-decripto04',
  templateUrl: 'decripto04.html',
})
export class Decripto04Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  avancaDecripto05() {
    this.navCtrl.push(Decripto05Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Decripto04Page');
  }

}
