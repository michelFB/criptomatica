import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cripto05Page } from '../cripto05/cripto05';


@IonicPage()
@Component({
  selector: 'page-cripto04',
  templateUrl: 'cripto04.html',
})
export class Cripto04Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  avancaCripto05() {
    this.navCtrl.push(Cripto05Page);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Cripto04Page');
  }

}
