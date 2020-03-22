import { Cripto07Page } from './../cripto07/cripto07';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cripto06',
  templateUrl: 'cripto06.html',
})
export class Cripto06Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  avancaCripto07() {
    this.navCtrl.push(Cripto07Page);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Cripto06Page');
  }

}
