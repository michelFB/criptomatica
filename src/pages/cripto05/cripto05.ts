import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cripto06Page } from '../cripto06/cripto06';


/**
 * Generated class for the Cripto05Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cripto05',
  templateUrl: 'cripto05.html',
})
export class Cripto05Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  avancaCripto06() {
    this.navCtrl.push(Cripto06Page);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Cripto05Page');
  }

}
