import { InicioPage } from './../inicio/inicio';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cripto07',
  templateUrl: 'cripto07.html',
})
export class Cripto07Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  avancaInicio() {
    this.navCtrl.popToRoot();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Cripto07Page');
  }

}
