
import { Cripto02Page } from './../cripto02/cripto02';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { matriz } from '../../model/matriz';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

@IonicPage()
@Component({
  selector: 'page-cripto01',
  templateUrl: 'cripto01.html',
})
export class Cripto01Page {
  public inputMensagem: string;
  public matrizMensagemOriginal = new matriz();



  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
   
  }

  avancaCripto02() {
    if (this.inputMensagem == null) {
      this.alertasValidacao("DIGITE ALGUMA COISA");
    } else {
      this.matrizMensagemOriginal.iniciarMatrizLetras(this.inputMensagem);
      this.navCtrl.push(Cripto02Page, {param1: this.matrizMensagemOriginal},
      );
      
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
    console.log('ionViewDidLoad Cripto01Page');
  }

}
