import { matriz } from './../../model/matriz';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cripto01Page } from '../cripto01/cripto01';
import { Decripto01Page } from '../decripto01/decripto01';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
  // public matrizMensagemOriginal = new matriz();
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.matrizMensagemOriginal.iniciarMatrizLetras("ABC");
    // console.log("vetor:"+this.matrizMensagemOriginal.getcoluna() );
  }

  avancaCripto01() {
    this.navCtrl.push(Cripto01Page);
  }
  avancaDecripto01() {
    this.navCtrl.push(Decripto01Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

}
