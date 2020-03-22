import { matriz } from './../../model/matriz';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cripto04Page } from '../cripto04/cripto04';
import { InicioPage } from '../inicio/inicio';


@IonicPage()
@Component({
  selector: 'page-cripto03',
  templateUrl: 'cripto03.html',
})
export class Cripto03Page {
  public matrizChave = new matriz();
  public matrizMensagemOriginal = new matriz();
  public inputMatMensOri = new matriz()
  public colunas = [0, 1];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.matrizChave = navParams.get('param1');
    this.matrizMensagemOriginal = navParams.get('param2');
    this.inputMatMensOri.iniciarMatrizNumerica(this.matrizMensagemOriginal.getcoluna(), 2);

  }

  validarMatriz() {
    var cont=0;
    for (var coluna = 0; coluna < this.matrizMensagemOriginal.getcoluna(); coluna++) {
      for (var linha = 0; linha < 2; linha++) {
        if (this.inputMatMensOri.elemento[coluna][linha] ==
              this.matrizMensagemOriginal.converterLN(this.matrizMensagemOriginal.elemento[coluna][linha])) {
          console.log("deu certo!!!");
          cont++;
        }else{

        }
      }
    }
    
  }

  avancaCripto04() {

    this.navCtrl.push(Cripto04Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Cripto03Page');
  }

}
