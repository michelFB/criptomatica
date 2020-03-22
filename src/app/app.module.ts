import { HillPage } from './../pages/hill/hill';
import { Decripto02Page } from '../pages/decripto02/decripto02';
import { Decripto01Page } from '../pages/decripto01/decripto01';
import { Cripto07Page } from '../pages/cripto07/cripto07';
import { Cripto06Page } from '../pages/cripto06/cripto06';
import { Cripto05Page } from '../pages/cripto05/cripto05';
import { Cripto03Page } from '../pages/cripto03/cripto03';
import { Cripto02Page } from '../pages/cripto02/cripto02';
import { Cripto01Page } from '../pages/cripto01/cripto01';
import { InicioPage } from '../pages/inicio/inicio';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Cripto04Page } from '../pages/cripto04/cripto04';
import { Decripto03Page } from '../pages/decripto03/decripto03';
import { Decripto04Page } from '../pages/decripto04/decripto04';
import { Decripto05Page } from '../pages/decripto05/decripto05';
import { Decripto06Page } from '../pages/decripto06/decripto06';
import { Decripto07Page } from '../pages/decripto07/decripto07';
import { Decripto08Page } from '../pages/decripto08/decripto08';
import { PrimosPage } from '../pages/primos/primos';
import { MdcPage } from '../pages/mdc/mdc';
import { DeterminantePage } from '../pages/determinante/determinante';
import { SobrePage } from '../pages/sobre/sobre';
import { matriz } from '../model/matriz';
import { MeuCabecalhoComponent } from '../components/meu-cabecalho/meu-cabecalho';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    Cripto01Page,
    Cripto02Page,
    Cripto03Page,
    Cripto04Page,
    Cripto05Page,
    Cripto06Page,
    Cripto07Page,
    Decripto01Page,
    Decripto02Page,
    Decripto03Page,
    Decripto04Page,
    Decripto05Page,
    Decripto06Page,
    Decripto07Page,
    Decripto08Page,
    PrimosPage,
    MdcPage,
    DeterminantePage,
    MeuCabecalhoComponent,
    SobrePage,
    HillPage,
  ],
  imports: [
    BrowserModule,

    IonicModule.forRoot(MyApp),

  ],
  exports: [MeuCabecalhoComponent],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    Cripto01Page,
    Cripto02Page,
    Cripto03Page,
    Cripto04Page,
    Cripto05Page,
    Cripto06Page,
    Cripto07Page,
    Decripto01Page,
    Decripto02Page,
    Decripto03Page,
    Decripto04Page,
    Decripto05Page,
    Decripto06Page,
    Decripto07Page,
    Decripto08Page,
    PrimosPage,
    MdcPage,
    DeterminantePage,
    SobrePage,
    MeuCabecalhoComponent,
    HillPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    matriz,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
