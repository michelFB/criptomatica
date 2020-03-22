import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cripto03Page } from '../cripto03/cripto03';
import { matriz } from '../../model/matriz';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';


/**
 * Generated class for the Cripto02Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cripto02',
  templateUrl: 'cripto02.html',
})
export class Cripto02Page {
  public matrizChave = new matriz();
  public inputMatrizChave = new matriz();
  public matrizMensagemOriginal = new matriz();
  public inputDeterminante;
  public inputCongruente;
  public flagDeterminante: boolean = false;
  public flagCongruente: boolean = false;
  public flagAvancar: boolean = false;
  public linhas: number[] = [0, 1];

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    this.matrizChave.iniciarMatrizNumerica(2, 2);
    this.inputMatrizChave.iniciarMatrizNumerica(2, 2);
    this.matrizMensagemOriginal = navParams.get('param1');
    console.log("este aqui" + this.matrizMensagemOriginal.conteudo);

  }

  avancaCripto03() {
    this.navCtrl.push(Cripto03Page, { param1: this.matrizChave, param2: this.matrizMensagemOriginal });
  }

  validarMatrizchave() {
    this.inputMatrizChave.calcularDeterminante();
    var determinante = this.inputMatrizChave.getdeterminante();
    var congruente = this.inputMatrizChave.calcularCondruente(determinante);
    if (determinante == 0 || determinante == 1 || congruente % 2 == 0) {
      this.alertasValidacao("Esta matriz não admite inversivel, consulte as dicas!")
    }
    else {
      for (var coluna = 0; coluna < 2; coluna++) {
        for (var linha = 0; linha < 2; linha++) {
          this.matrizChave.elemento[coluna][linha] = this.inputMatrizChave.elemento[coluna][linha];
          console.log('elemento: i[' + coluna + '], j[' + linha + ']= ' + this.matrizChave.elemento[coluna][linha]);
        }
      }
      this.flagDeterminante = true;
    }
  }

  validarDeterminate() {
    this.matrizChave.calcularDeterminante();
    console.log("determinante matriz chave" + this.matrizChave.getdeterminante());
    console.log("input det: " + this.inputDeterminante);
    if (this.inputDeterminante == this.matrizChave.getdeterminante()) {
      if (this.matrizChave.calcularCondruente(this.matrizChave.getdeterminante()) == this.matrizChave.getdeterminante()) {
        this.flagAvancar = true;
      }
      else { this.flagCongruente = true; }
    } else {
      this.alertasValidacao("Valor errado do determinante, consulte as dicas!")
      this.inputDeterminante = "";
    }
  }

  validarCongruente() {
    if (this.inputCongruente == this.matrizChave.calcularCondruente(this.matrizChave.getdeterminante())) {
      this.flagAvancar = true;
    } else {
      this.alertasValidacao("Valor errado do congruente, consulte as dicas!")
      this.inputCongruente = "";
    }
  }

  alertasValidacao(mensagem: string) {
    let toast = this.toastCtrl.create({
      message: mensagem,
      duration: 1000,
      position: 'botton'
    });
    toast.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Cripto02Page');
  }

}
