import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Decripto08Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-decripto08',
  templateUrl: 'decripto08.html',
})
export class Decripto08Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  avancaInicio() {
    this.navCtrl.popToRoot();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Decripto08Page');
  }

}
