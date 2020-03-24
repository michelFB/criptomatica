webpackJsonp([21],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HillPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HillPage = /** @class */ (function () {
    function HillPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HillPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HillPage');
    };
    HillPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hill',template:/*ion-inline-start:"D:\PROJETOS\IONIC\criptomatica\src\pages\hill\hill.html"*/'<ion-header>\n  <meu-cabecalho>\n  </meu-cabecalho>\n</ion-header>\n\n<ion-content padding>\n<h2 style="text-align: justify;">CRIPTOGRAFIA DE HILL</h2>\n<p style="text-align: justify;">A criptografia de Hill consiste em um tipo de criptografia por substitui&ccedil;&atilde;o poli alfab&eacute;tica que foi\n  desenvolvida por Lester S. Hill em 1929. Utiliza princ&iacute;pios b&aacute;sicos da &aacute;lgebra linear e teoria dos\n  n&uacute;meros no processo de criptografar uma mensagem. Trabalha-se bastante com opera&ccedil;&otilde;es matriciais e\n  aritm&eacute;tica modular. Os procedimentos para cifrar e decifrar uma mensagem ser&atilde;o descritos conforme levantamento\n  realizado nos trabalhos de (BRAND&Atilde;O, 2017) e (COSTA e CAETANO, 2017).</p>\n<img src="assets/imgs/hill.jpg">\n\n</ion-content>\n'/*ion-inline-end:"D:\PROJETOS\IONIC\criptomatica\src\pages\hill\hill.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HillPage);
    return HillPage;
}());

//# sourceMappingURL=hill.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cripto04Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cripto05_cripto05__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Cripto04Page = /** @class */ (function () {
    function Cripto04Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Cripto04Page.prototype.avancaCripto05 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cripto05_cripto05__["a" /* Cripto05Page */]);
    };
    Cripto04Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Cripto04Page');
    };
    Cripto04Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cripto04',template:/*ion-inline-start:"D:\PROJETOS\IONIC\criptomatica\src\pages\cripto04\cripto04.html"*/'<ion-header>\n  <meu-cabecalho>\n  </meu-cabecalho>\n</ion-header>\n\n<ion-content padding>\n  <div class=\'center\'>\n    Verifique como fica o formato da mensagem em uma matriz 2xn: Matriz de letras da mensagem original:\n    <ion-grid>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n    </ion-grid>\n\n    Matriz Numérica da mensagem original:\n    <ion-grid>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <button ion-button outline (click)="avancaCripto05()">Proxima etapa</button>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\PROJETOS\IONIC\criptomatica\src\pages\cripto04\cripto04.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], Cripto04Page);
    return Cripto04Page;
}());

//# sourceMappingURL=cripto04.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cripto05Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cripto06_cripto06__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Cripto05Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Cripto05Page = /** @class */ (function () {
    function Cripto05Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Cripto05Page.prototype.avancaCripto06 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cripto06_cripto06__["a" /* Cripto06Page */]);
    };
    Cripto05Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Cripto05Page');
    };
    Cripto05Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cripto05',template:/*ion-inline-start:"D:\PROJETOS\IONIC\criptomatica\src\pages\cripto05\cripto05.html"*/'<ion-header>\n  <meu-cabecalho>\n  </meu-cabecalho>\n</ion-header>\n\n<ion-content padding>\n  <ion-fab right top>\n    <button ion-fab mini>\n      <ion-icon name="information-circle"></ion-icon></button>\n  </ion-fab>\n\n  <div class=\'center\'>\n     ETAPA 4: Calcule o produto da matriz chave oela matriz da mensagem Original.\n    <ion-grid>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n    </ion-grid>\n\n    Matriz Numérica da mensagem original:\n    <ion-grid>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n    </ion-grid>\n  <button ion-button outline round (click)="avancaCripto06()">Validar Resposta</button>\n  <button ion-button outline (click)="avancaCripto06()">Proxima etapa</button>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\PROJETOS\IONIC\criptomatica\src\pages\cripto05\cripto05.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], Cripto05Page);
    return Cripto05Page;
}());

//# sourceMappingURL=cripto05.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cripto06Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cripto07_cripto07__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Cripto06Page = /** @class */ (function () {
    function Cripto06Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Cripto06Page.prototype.avancaCripto07 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__cripto07_cripto07__["a" /* Cripto07Page */]);
    };
    Cripto06Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Cripto06Page');
    };
    Cripto06Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-cripto06',template:/*ion-inline-start:"D:\PROJETOS\IONIC\criptomatica\src\pages\cripto06\cripto06.html"*/'<ion-header>\n  <meu-cabecalho>\n  </meu-cabecalho>\n</ion-header>\n\n<ion-content padding>\n  <ion-fab right top>\n    <button ion-fab mini>\n      <ion-icon name="information-circle"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <div class=\'center\'>\n    ETAPA 5: Calcule a matriz de congruentes da matriz produto na base 32.\n    <ion-grid>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n    </ion-grid>\n\n    A matriz produto congruente é:\n    <ion-grid>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n    </ion-grid>\n    <button ion-button outline round (click)="avancaCripto07()">Validar Resposta</button>\n    <button ion-button outline (click)="avancaCripto07()">Proxima etapa</button>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\PROJETOS\IONIC\criptomatica\src\pages\cripto06\cripto06.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], Cripto06Page);
    return Cripto06Page;
}());

//# sourceMappingURL=cripto06.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cripto07Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Cripto07Page = /** @class */ (function () {
    function Cripto07Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Cripto07Page.prototype.avancaInicio = function () {
        this.navCtrl.popToRoot();
    };
    Cripto07Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Cripto07Page');
    };
    Cripto07Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cripto07',template:/*ion-inline-start:"D:\PROJETOS\IONIC\criptomatica\src\pages\cripto07\cripto07.html"*/'<ion-header>\n  <meu-cabecalho>\n  </meu-cabecalho>\n</ion-header>\n\n<ion-content padding>\n  <ion-fab right bottom>\n    <button ion-fab mini>\n      <ion-icon name="logo-whatsapp"></ion-icon>\n    </button>\n  </ion-fab>\n  <div class=\'center\'>\n    ETAPA 1: Substitua valores numéericos pelas respectivas letras do alfabeto:\n    <ion-card>\n      <img src="assets/imgs/alfabeto-numero.png">\n      <ion-card-header>\n        PARA CADA NÚMERO UMA LETRA CORRESPONDENTE\n      </ion-card-header>\n    </ion-card>\n<ion-grid>\n  <ion-row>\n    <ion-col col-2>10</ion-col>\n    <ion-col col-2>10</ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-2>10</ion-col>\n    <ion-col col-2>10</ion-col>\n  </ion-row>\n</ion-grid>\n    <button ion-button outline round (click)="avancaCripto07()">Validar Resposta</button>\n    <ion-label>  A mensagem original é:  <!-- {{ product.name }} --> </ion-label>\n  <ion-label>  A mensagem cifrada é:  <!-- {{ product.name }} --> </ion-label>\n    <ion-input type="text" placeholder="Nome do arquivo:"></ion-input>\n  \n    <button ion-button  outline (click)="buttonClick()">SALVAR ARQUIVO</button>\n    <button ion-button outline (click)=" avancaInicio()">CONCLUIR</button>\n  \n\n  </div>\n</ion-content>'/*ion-inline-end:"D:\PROJETOS\IONIC\criptomatica\src\pages\cripto07\cripto07.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], Cripto07Page);
    return Cripto07Page;
}());

//# sourceMappingURL=cripto07.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Decripto01Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decripto02_decripto02__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Decripto01Page = /** @class */ (function () {
    function Decripto01Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Decripto01Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Decripto01Page');
    };
    Decripto01Page.prototype.avancaDecripto02 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__decripto02_decripto02__["a" /* Decripto02Page */]);
    };
    Decripto01Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-decripto01',template:/*ion-inline-start:"D:\PROJETOS\IONIC\criptomatica\src\pages\decripto01\decripto01.html"*/'<ion-header>\n  <meu-cabecalho>\n  </meu-cabecalho>\n</ion-header>\n\n<ion-content padding>\n  <div class=\'center\'>\n    ETAPA 1: Obtenha a mensagem criptofagada e a matriz chave pública, em seguida calcule o determinante da matriz inversa.\n\n    <!-- *************************************************************************** -->\n    <ion-card>\n      <ion-card-header>\n        Escolha um arquivo:\n      </ion-card-header>\n      <ion-item>\n        <ion-label>{{nome}}</ion-label>\n        <button ion-button item-end round outline (click)="buttonClick()">\n          <ion-icon name="search"></ion-icon>\n        </button>\n        <button ion-button item-end round outline (click)="buttonClick()">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item>\n    </ion-card>\n\n    <!-- ********************************************************************************************* -->\n\n    A matriz chave Pública é:\n    <ion-grid>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-item>\n      <ion-label>A mensagem criptografada é:</ion-label>\n      <ion-input type="text" [(ngModel)]="determinanteUsuario"></ion-input>\n    </ion-item>\n\n    <button ion-button outline round color="danger" (click)="avancaCripto02()">ESSCOLHA OUTRO ARQUIVO</button>\n\n    <ion-item>\n      <ion-label>Determinante:</ion-label>\n      <ion-input type="text" [(ngModel)]="determinanteUsuario"></ion-input>\n      <button ion-button item-end round outline (click)="buttonClick()">Validar</button>\n      <button ion-button item-end round outline (click)="buttonClick()">\n        <ion-icon name="information-circle"></ion-icon>\n      </button>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Congruente:</ion-label>\n      <ion-input type="text" [(ngModel)]="determinanteUsuario"></ion-input>\n      <button ion-button item-end round outline (click)="buttonClick()">Validar</button>\n      <button ion-button item-end round outline (click)="buttonClick()">\n        <ion-icon name="information-circle"></ion-icon>\n      </button>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Det. Matriz inversa:</ion-label>\n      <ion-input type="text" [(ngModel)]="determinanteUsuario"></ion-input>\n      <button ion-button item-end round outline (click)="buttonClick()">Validar</button>\n      <button ion-button item-end round outline (click)="buttonClick()">\n        <ion-icon name="information-circle"></ion-icon>\n      </button>\n    </ion-item>\n    <button ion-button outline (click)="avancaDecripto02()"> Proxima etapa</button>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\PROJETOS\IONIC\criptomatica\src\pages\decripto01\decripto01.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], Decripto01Page);
    return Decripto01Page;
}());

//# sourceMappingURL=decripto01.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Decripto02Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decripto03_decripto03__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Decripto02Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Decripto02Page = /** @class */ (function () {
    function Decripto02Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Decripto02Page.prototype.avancaDecripto03 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__decripto03_decripto03__["a" /* Decripto03Page */]);
    };
    Decripto02Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Decripto02Page');
    };
    Decripto02Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-decripto02',template:/*ion-inline-start:"D:\PROJETOS\IONIC\criptomatica\src\pages\decripto02\decripto02.html"*/'<ion-header>\n  <meu-cabecalho>\n  </meu-cabecalho>\n</ion-header>\n\n<ion-content padding>\n  <ion-fab right top>\n    <button ion-fab mini>\n      <ion-icon name="information-circle"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <div class=\'center\'>\n    ETAPA 2: CALCULANDO A CHAVE PRIVADA - Calcule a matriz de cofatores.\n    <ion-label>A matriz CHAVE PÚBLICA é:</ion-label>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-label>Insira a matriz de cofatores:</ion-label>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n    </ion-grid>\n    <button ion-button outline round (click)="avancaCripto06()">Validar Resposta</button>\n    <button ion-button outline (click)="avancaDecripto03()">Proxima etapa</button>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\PROJETOS\IONIC\criptomatica\src\pages\decripto02\decripto02.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], Decripto02Page);
    return Decripto02Page;
}());

//# sourceMappingURL=decripto02.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Decripto03Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decripto04_decripto04__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Decripto03Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Decripto03Page = /** @class */ (function () {
    function Decripto03Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Decripto03Page.prototype.avancaDecripto04 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__decripto04_decripto04__["a" /* Decripto04Page */]);
    };
    Decripto03Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Decripto03Page');
    };
    Decripto03Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-decripto03',template:/*ion-inline-start:"D:\PROJETOS\IONIC\criptomatica\src\pages\decripto03\decripto03.html"*/'<ion-header>\n  <meu-cabecalho>\n  </meu-cabecalho>\n</ion-header>\n\n<ion-content padding>\n  <ion-fab right top>\n    <button ion-fab mini>\n      <ion-icon name="information-circle"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <div class=\'center\'>\n    ETAPA 3: CALCULANDO A CHAVE PRIVADA -\n    <ion-label>Essa é a matriz de COFATORES:</ion-label>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-label>Insira a matriz de TRANSPOSTA:</ion-label>\n    <ion-label>Essa é a matriz Adjunta da matriz de Cofatores:</ion-label>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n    </ion-grid>\n    <button ion-button outline round (click)="avancaCripto06()">Validar Resposta</button>\n    <button ion-button outline (click)="avancaDecripto04()">Proxima etapa</button>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\PROJETOS\IONIC\criptomatica\src\pages\decripto03\decripto03.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], Decripto03Page);
    return Decripto03Page;
}());

//# sourceMappingURL=decripto03.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Decripto04Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decripto05_decripto05__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Decripto04Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Decripto04Page = /** @class */ (function () {
    function Decripto04Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Decripto04Page.prototype.avancaDecripto05 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__decripto05_decripto05__["a" /* Decripto05Page */]);
    };
    Decripto04Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Decripto04Page');
    };
    Decripto04Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-decripto04',template:/*ion-inline-start:"D:\PROJETOS\IONIC\criptomatica\src\pages\decripto04\decripto04.html"*/'<ion-header>\n  <meu-cabecalho>\n  </meu-cabecalho>\n</ion-header>\n\n<ion-content padding>\n  <ion-fab right top>\n    <button ion-fab mini>\n      <ion-icon name="information-circle"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <div class=\'center\'>\n    ETAPA 4: CALCULANDO A CHAVE PRIVADA -\n    <ion-label>Multiplique o determinante da inversa pela Matriz Adjunta:</ion-label>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-label>Calcule a Matriz CHAVE PRIVADA:</ion-label>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n    </ion-grid>\n    <button ion-button outline round (click)="avancaCripto06()">Validar Resposta</button>\n    <button ion-button outline (click)="avancaDecripto05()">Proxima etapa</button>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\PROJETOS\IONIC\criptomatica\src\pages\decripto04\decripto04.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], Decripto04Page);
    return Decripto04Page;
}());

//# sourceMappingURL=decripto04.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Decripto05Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decripto06_decripto06__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Decripto05Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Decripto05Page = /** @class */ (function () {
    function Decripto05Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Decripto05Page.prototype.avancaDecripto06 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__decripto06_decripto06__["a" /* Decripto06Page */]);
    };
    Decripto05Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Decripto05Page');
    };
    Decripto05Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-decripto05',template:/*ion-inline-start:"D:\PROJETOS\IONIC\criptomatica\src\pages\decripto05\decripto05.html"*/'<ion-header>\n  <meu-cabecalho>\n  </meu-cabecalho>\n</ion-header>\n\n<ion-content padding>\n  <ion-fab right top>\n    <button ion-fab mini>\n      <ion-icon name="information-circle"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <div class=\'center\'>\n    ETAPA 5: Calcule os coongruentes da matriz chave privada\n    <ion-label>MATRIZ CHAVE PRIVADA</ion-label>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-label>insira a matriz CONGRUENTE:</ion-label>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n    </ion-grid>\n    <button ion-button outline round (click)="avancaCripto06()">Validar Resposta</button>\n    <button ion-button outline (click)="avancaDecripto06()">Proxima etapa</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\PROJETOS\IONIC\criptomatica\src\pages\decripto05\decripto05.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], Decripto05Page);
    return Decripto05Page;
}());

//# sourceMappingURL=decripto05.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Decripto06Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decripto07_decripto07__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Decripto06Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Decripto06Page = /** @class */ (function () {
    function Decripto06Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Decripto06Page.prototype.avancaDecripto07 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__decripto07_decripto07__["a" /* Decripto07Page */]);
    };
    Decripto06Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Decripto06Page');
    };
    Decripto06Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-decripto06',template:/*ion-inline-start:"D:\PROJETOS\IONIC\criptomatica\src\pages\decripto06\decripto06.html"*/'<ion-header>\n  <meu-cabecalho>\n  </meu-cabecalho>\n</ion-header>\n\n<ion-content padding>\n  <ion-fab right top>\n    <button ion-fab mini>\n      <ion-icon name="information-circle"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <div class=\'center\'>\n    ETAPA 5.1: Multiplique a matriz chave privada pela matriz mensagem criptografada\n    <ion-grid>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-label>A matriz DECIFRADA é:</ion-label>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n    </ion-grid>\n    <button ion-button outline round (click)="avancaCripto06()">Validar Resposta</button>\n    <button ion-button outline (click)="avancaDecripto07()">Proxima etapa</button>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\PROJETOS\IONIC\criptomatica\src\pages\decripto06\decripto06.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], Decripto06Page);
    return Decripto06Page;
}());

//# sourceMappingURL=decripto06.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Decripto07Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decripto08_decripto08__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Decripto07Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Decripto07Page = /** @class */ (function () {
    function Decripto07Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Decripto07Page.prototype.avancaDecripto08 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__decripto08_decripto08__["a" /* Decripto08Page */]);
    };
    Decripto07Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Decripto07Page');
    };
    Decripto07Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-decripto07',template:/*ion-inline-start:"D:\PROJETOS\IONIC\criptomatica\src\pages\decripto07\decripto07.html"*/'<ion-header>\n  <meu-cabecalho>\n  </meu-cabecalho>\n</ion-header>\n\n<ion-content padding>\n  <ion-fab right top>\n    <button ion-fab mini>\n      <ion-icon name="information-circle"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <div class=\'center\'>\n    ETAPA 6: Calcule os coongruentes da MATRIZ DECIFRADA\n    <ion-label>MATRIZ DECIFRADA</ion-label>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-label>insira a matriz CONGRUENTE:</ion-label>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n    </ion-grid>\n    <button ion-button outline round (click)="avancaCripto06()">Validar Resposta</button>\n    <button ion-button outline (click)="avancaDecripto08()">Proxima etapa</button>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\PROJETOS\IONIC\criptomatica\src\pages\decripto07\decripto07.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], Decripto07Page);
    return Decripto07Page;
}());

//# sourceMappingURL=decripto07.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Decripto08Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Decripto08Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Decripto08Page = /** @class */ (function () {
    function Decripto08Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Decripto08Page.prototype.avancaInicio = function () {
        this.navCtrl.popToRoot();
    };
    Decripto08Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Decripto08Page');
    };
    Decripto08Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-decripto08',template:/*ion-inline-start:"D:\PROJETOS\IONIC\criptomatica\src\pages\decripto08\decripto08.html"*/'<ion-header>\n  <meu-cabecalho>\n  </meu-cabecalho>\n</ion-header>\n\n<ion-content padding>\n  <ion-fab right bottom>\n    <button ion-fab mini>\n      <ion-icon name="logo-whatsapp"></ion-icon>\n    </button>\n  </ion-fab>\n  <div class=\'center\'>\n    ETAPA 7: Substitua valores numéericos pelas respectivas letras do alfabeto:\n    <ion-card>\n      <img src="assets/imgs/alfabeto-numero.png">\n      <ion-card-header>\n        PARA CADA NÚMERO UMA LETRA CORRESPONDENTE\n      </ion-card-header>\n    </ion-card>\n    A matriz de letras da mensagem DECIFRADA é:\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-2>10</ion-col>\n        <ion-col col-2>10</ion-col>\n      </ion-row>\n    </ion-grid>\n    <button ion-button outline round (click)="avancaCripto07()">Validar Resposta</button>\n    <ion-label> A mensagem Cifrada foi:\n      <!-- {{ product.name }} -->\n    </ion-label>\n    <ion-label> A mensagem Decifrada:\n      <!-- {{ product.name }} -->\n    </ion-label>\n      <button ion-button outline (click)=" avancaInicio()">CONCLUIR</button>\n\n\n  </div>\n</ion-content>'/*ion-inline-end:"D:\PROJETOS\IONIC\criptomatica\src\pages\decripto08\decripto08.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], Decripto08Page);
    return Decripto08Page;
}());

//# sourceMappingURL=decripto08.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cripto01Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cripto02_cripto02__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_matriz__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_toast_toast_controller__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Cripto01Page = /** @class */ (function () {
    function Cripto01Page(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.matrizMensagemOriginal = new __WEBPACK_IMPORTED_MODULE_3__model_matriz__["a" /* matriz */]();
    }
    Cripto01Page.prototype.avancaCripto02 = function () {
        if (this.inputMensagem == null) {
            this.alertasValidacao("DIGITE ALGUMA COISA");
        }
        else {
            this.matrizMensagemOriginal.iniciarMatrizLetras(this.inputMensagem);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__cripto02_cripto02__["a" /* Cripto02Page */], { param1: this.matrizMensagemOriginal });
        }
    };
    Cripto01Page.prototype.alertasValidacao = function (mensagem) {
        var toast = this.toastCtrl.create({
            message: mensagem,
            duration: 1000,
            position: 'botton'
        });
        toast.present();
    };
    Cripto01Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Cripto01Page');
    };
    Cripto01Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-cripto01',template:/*ion-inline-start:"D:\PROJETOS\IONIC\criptomatica\src\pages\cripto01\cripto01.html"*/'<ion-header>\n  <meu-cabecalho>\n  </meu-cabecalho>\n</ion-header>\n\n  <ion-content padding>\n  <div class=\'center\'>\n    ETAPA 1: Escreva uma mensagem utilizando o alfabeto abaixo..\n    <ion-card>\n      <img src="assets/imgs/alfabeto-numero.png">\n      <ion-card-header>\n        ESSE ALFABETO POSSUI 32 CARACTERES\n      </ion-card-header>\n    </ion-card>\n    MENSAGEM ORIGINAL\n    <ion-input type="text" placeholder="Digite aqui sua mensagem" [(ngModel)]="inputMensagem"></ion-input>\n    <button ion-button outline (click)="avancaCripto02()">Proxima etapa</button>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\PROJETOS\IONIC\criptomatica\src\pages\cripto01\cripto01.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_toast_toast_controller__["a" /* ToastController */]])
    ], Cripto01Page);
    return Cripto01Page;
}());

//# sourceMappingURL=cripto01.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cripto02Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cripto03_cripto03__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_matriz__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_toast_toast_controller__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the Cripto02Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Cripto02Page = /** @class */ (function () {
    function Cripto02Page(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.matrizChave = new __WEBPACK_IMPORTED_MODULE_3__model_matriz__["a" /* matriz */]();
        this.inputMatrizChave = new __WEBPACK_IMPORTED_MODULE_3__model_matriz__["a" /* matriz */]();
        this.matrizMensagemOriginal = new __WEBPACK_IMPORTED_MODULE_3__model_matriz__["a" /* matriz */]();
        this.flagDeterminante = false;
        this.flagCongruente = false;
        this.flagAvancar = false;
        this.linhas = [0, 1];
        this.matrizChave.iniciarMatrizNumerica(2, 2);
        this.inputMatrizChave.iniciarMatrizNumerica(2, 2);
        this.matrizMensagemOriginal = navParams.get('param1');
        console.log("este aqui" + this.matrizMensagemOriginal.conteudo);
    }
    Cripto02Page.prototype.avancaCripto03 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cripto03_cripto03__["a" /* Cripto03Page */], { param1: this.matrizChave, param2: this.matrizMensagemOriginal });
    };
    Cripto02Page.prototype.validarMatrizchave = function () {
        this.inputMatrizChave.calcularDeterminante();
        var determinante = this.inputMatrizChave.getdeterminante();
        var congruente = this.inputMatrizChave.calcularCondruente(determinante);
        if (determinante == 0 || determinante == 1 || congruente % 2 == 0) {
            this.alertasValidacao("Esta matriz não admite inversivel, consulte as dicas!");
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
    };
    Cripto02Page.prototype.validarDeterminate = function () {
        this.matrizChave.calcularDeterminante();
        console.log("determinante matriz chave" + this.matrizChave.getdeterminante());
        console.log("input det: " + this.inputDeterminante);
        if (this.inputDeterminante == this.matrizChave.getdeterminante()) {
            if (this.matrizChave.calcularCondruente(this.matrizChave.getdeterminante()) == this.matrizChave.getdeterminante()) {
                this.flagAvancar = true;
            }
            else {
                this.flagCongruente = true;
            }
        }
        else {
            this.alertasValidacao("Valor errado do determinante, consulte as dicas!");
            this.inputDeterminante = "";
        }
    };
    Cripto02Page.prototype.validarCongruente = function () {
        if (this.inputCongruente == this.matrizChave.calcularCondruente(this.matrizChave.getdeterminante())) {
            this.flagAvancar = true;
        }
        else {
            this.alertasValidacao("Valor errado do congruente, consulte as dicas!");
            this.inputCongruente = "";
        }
    };
    Cripto02Page.prototype.alertasValidacao = function (mensagem) {
        var toast = this.toastCtrl.create({
            message: mensagem,
            duration: 1000,
            position: 'botton'
        });
        toast.present();
    };
    Cripto02Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Cripto02Page');
    };
    Cripto02Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cripto02',template:/*ion-inline-start:"D:\PROJETOS\IONIC\criptomatica\src\pages\cripto02\cripto02.html"*/'<ion-header>\n  <meu-cabecalho>\n  </meu-cabecalho>\n</ion-header>\n\n<ion-content padding>\n  <div class=\'center\'>\n    ETAPA 2: Insira a matriz Chave pública que será utilizada para criptografar a mensagem:.\n       \n    <ion-grid padding>\n      <ion-row *ngFor="let linha of [0,1]">\n        <ion-col *ngFor="let coluna of [0,1]">\n          <ion-row class=\'center\'>\n          <ion-input type="number" placeholder="a({{coluna}},{{linha}})" \n          [(ngModel)]="this.inputMatrizChave.elemento[coluna][linha]"></ion-input>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n   \n    \n    <button ion-button outline round (click)="validarMatrizchave()">Validar</button>\n\n    <ion-item  *ngIf="flagDeterminante">\n      <ion-label>Determinante:</ion-label>\n      <ion-input type="text" [(ngModel)]="inputDeterminante"></ion-input>\n      <button ion-button item-end round outline (click)="validarDeterminate()">Validar</button>\n      <button ion-button item-end round outline (click)="buttonClick()">\n        <ion-icon name="information-circle"></ion-icon>\n      </button>\n    </ion-item>\n\n    <ion-item *ngIf="flagCongruente">\n      <ion-label>Congruente da Det:</ion-label>\n      <ion-input type="text" [(ngModel)]=" inputCongruente"></ion-input>\n      <button ion-button item-end round outline (click)=" validarCongruente()">Validar</button>\n      <button ion-button item-end round outline (click)="buttonClick()">\n        <ion-icon name="information-circle"></ion-icon>\n      </button>\n    </ion-item>\n\n    <button ion-button outline *ngIf="flagAvancar" (click)=" avancaCripto03()">Proxima etapa</button>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\PROJETOS\IONIC\criptomatica\src\pages\cripto02\cripto02.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_toast_toast_controller__["a" /* ToastController */]])
    ], Cripto02Page);
    return Cripto02Page;
}());

//# sourceMappingURL=cripto02.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cripto03Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_matriz__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cripto04_cripto04__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Cripto03Page = /** @class */ (function () {
    function Cripto03Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.matrizChave = new __WEBPACK_IMPORTED_MODULE_0__model_matriz__["a" /* matriz */]();
        this.matrizMensagemOriginal = new __WEBPACK_IMPORTED_MODULE_0__model_matriz__["a" /* matriz */]();
        this.inputMatMensOri = new __WEBPACK_IMPORTED_MODULE_0__model_matriz__["a" /* matriz */]();
        this.colunas = [0, 1];
        this.matrizChave = navParams.get('param1');
        this.matrizMensagemOriginal = navParams.get('param2');
        this.inputMatMensOri.iniciarMatrizNumerica(this.matrizMensagemOriginal.getcoluna(), 2);
    }
    Cripto03Page.prototype.validarMatriz = function () {
        var cont = 0;
        for (var coluna = 0; coluna < this.matrizMensagemOriginal.getcoluna(); coluna++) {
            for (var linha = 0; linha < 2; linha++) {
                if (this.inputMatMensOri.elemento[coluna][linha] ==
                    this.matrizMensagemOriginal.converterLN(this.matrizMensagemOriginal.elemento[coluna][linha])) {
                    console.log("deu certo!!!");
                    cont++;
                }
                else {
                }
            }
        }
    };
    Cripto03Page.prototype.avancaCripto04 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cripto04_cripto04__["a" /* Cripto04Page */]);
    };
    Cripto03Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Cripto03Page');
    };
    Cripto03Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-cripto03',template:/*ion-inline-start:"D:\PROJETOS\IONIC\criptomatica\src\pages\cripto03\cripto03.html"*/'<ion-header>\n  <meu-cabecalho>\n  </meu-cabecalho>\n</ion-header>\n\n<ion-content padding>\n  <div class=\'center\'>\n    ETAPA 3: Substituindo a letra pelo seu respectivo valor numerico.\n    <ion-card>\n      <img src="assets/imgs/alfabeto-numero.png">\n      <ion-card-header>\n        PARA CADA LETRA UM NUMERO CORRESPONDENTE\n      </ion-card-header>\n    </ion-card>\n\n    \n    <ion-grid>\n      <ion-row *ngFor="let linha of [0,1]">\n        <ion-col *ngFor="let colunas of this.matrizMensagemOriginal.elemento, let coluna=index">\n          <ion-row>\n            <ion-label>{{this.matrizMensagemOriginal.elemento[coluna][linha]}} </ion-label>\n          </ion-row>\n          <ion-row class=\'center\'>\n          <ion-input type="number" placeholder="a({{coluna}},{{linha}})" [(ngModel)]="this.inputMatMensOri.elemento[coluna][linha]">\n          </ion-input>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <button ion-button outline round (click)="validarMatriz()">Validar Resposta</button>\n    <button ion-button outline (click)="avancaCripto04()">Proxima etapa</button>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\PROJETOS\IONIC\criptomatica\src\pages\cripto03\cripto03.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], Cripto03Page);
    return Cripto03Page;
}());

//# sourceMappingURL=cripto03.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SobrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SobrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SobrePage = /** @class */ (function () {
    function SobrePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SobrePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SobrePage');
    };
    SobrePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sobre',template:/*ion-inline-start:"D:\PROJETOS\IONIC\criptomatica\src\pages\sobre\sobre.html"*/'<ion-header>\n  <meu-cabecalho>\n  </meu-cabecalho>\n</ion-header>\n\n<ion-content padding>\n<h1>\n  <strong>SOBRE</strong>\n</h1>\n<p style="text-align: justify;">O criptomatica &eacute; futo de um projeto de conclus&atilde;o do curso de p&oacute;s-gradua&ccedil;&atilde;o em engenharia\n  de software, realizado na Facape (2017-2018). Este aplicativo educacional tem como foco trazer conte&uacute;dos matematicos\n  vistos no ensino m&eacute;dio, como matrizes e determinates, algebra modular, inversos modulares; aplicados &aacute; tem&aacute;tica\n  da criptografia de Hill. O maior intuito &eacute; apoiar e incentivar com essa ferramenta, o ensino e aprendizagem da Matem&aacute;tica.</p>\n<p>&nbsp;</p>\n<p>P&oacute;s-graduado: Michel Ferreira Batista</p>\n<p>Orientador: Dr. Ricardo Argenton Ramos</p>\n<p>&nbsp;</p>\n    <img src="assets/imgs/sobre1.png">\n        <img src="assets/imgs/sobre2.png">\n\n</ion-content>\n'/*ion-inline-end:"D:\PROJETOS\IONIC\criptomatica\src\pages\sobre\sobre.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SobrePage);
    return SobrePage;
}());

//# sourceMappingURL=sobre.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cripto01_cripto01__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__decripto01_decripto01__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InicioPage = /** @class */ (function () {
    // public matrizMensagemOriginal = new matriz();
    function InicioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // this.matrizMensagemOriginal.iniciarMatrizLetras("ABC");
        // console.log("vetor:"+this.matrizMensagemOriginal.getcoluna() );
    }
    InicioPage.prototype.avancaCripto01 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cripto01_cripto01__["a" /* Cripto01Page */]);
    };
    InicioPage.prototype.avancaDecripto01 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__decripto01_decripto01__["a" /* Decripto01Page */]);
    };
    InicioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InicioPage');
    };
    InicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inicio',template:/*ion-inline-start:"D:\PROJETOS\IONIC\criptomatica\src\pages\inicio\inicio.html"*/'<ion-header>\n  <meu-cabecalho>\n  </meu-cabecalho>\n</ion-header>\n\n<ion-content padding>\n\n  \n  <!-- <ion-grid>\n    <ion-row *ngFor="let linha of [0,1]">\n      <ion-col *ngFor="let colunas of this.matrizMensagemOriginal.elemento, let coluna=index">\n        <ion-row>\n      <ion-label>{{this.matrizMensagemOriginal.elemento[coluna][linha]}} </ion-label>\n      </ion-row>\n      <ion-row class=\'center\'>\n        <ion-input type="text" placeholder="a({{coluna}},{{linha}})" \n        [(ngModel)]="this.matrizMensagemOriginal.elemento[coluna][linha]"></ion-input>    \n      </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n  <div>\n    <ion-list>\n      <ion-list-header>\n        <div class=\'center\'>\n          PRATICAR CRIPTOGRAFIA\n        </div>\n      </ion-list-header>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/inicio1.jpg">\n        </ion-thumbnail>\n        <h2>CRIPTOGRAFANDO HILL</h2>\n        <p>Hayao Miyazaki • 1988</p>\n        <button (click)="avancaCripto01()" ion-button clear item-end>ver</button>\n      </ion-item>\n    </ion-list>\n\n    <ion-list>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/inicio2.jpg">\n        </ion-thumbnail>\n        <h2>DECIFRANDO HILL</h2>\n        <p>Hayao Miyazaki • 1988</p>\n        <button (click)="avancaDecripto01()" ion-button clear item-end>ver</button>\n      </ion-item>\n    </ion-list>\n    <ion-list-header>\n      <div class=\'center\'>\n        ESTUDAR CONTEÚDO MATEMÁTICO\n      </div>\n    </ion-list-header>\n    <ion-list>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/inicio3.jpg">\n        </ion-thumbnail>\n        <h2>MAXIMO DIVISOR COMUM</h2>\n        <p>Hayao Miyazaki • 1988</p>\n        <button ion-button clear item-end>ver</button>\n      </ion-item>\n    </ion-list>\n\n    <ion-list>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/inicio4.jpg">\n        </ion-thumbnail>\n        <h2>MATRIZES</h2>\n        <p>Hayao Miyazaki • 1988</p>\n        <button ion-button clear item-end>ver</button>\n      </ion-item>\n    </ion-list>\n\n    <ion-list>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/inicio5.jpg">\n        </ion-thumbnail>\n        <h2>INVERSOS MODULARES</h2>\n        <p>Hayao Miyazaki • 1988</p>\n        <button ion-button clear item-end>ver</button>\n      </ion-item>\n    </ion-list>\n\n\n    <ion-list>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/inicio6.jpg">\n        </ion-thumbnail>\n        <h2>INVERSOS MODULARES</h2>\n        <p>Hayao Miyazaki • 1988</p>\n        <button ion-button clear item-end>ver</button>\n      </ion-item>\n    </ion-list>\n\n\n    <ion-list>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/inicio7.jpg">\n        </ion-thumbnail>\n        <h2>INVERSOS MODULARES</h2>\n        <p>Hayao Miyazaki • 1988</p>\n        <button ion-button clear item-end>ver</button>\n      </ion-item>\n    </ion-list>\n\n\n    <ion-list>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/inicio8.png">\n        </ion-thumbnail>\n        <h2>INVERSOS MODULARES</h2>\n        <p>Hayao Miyazaki • 1988</p>\n        <button ion-button clear item-end>ver</button>\n      </ion-item>\n    </ion-list>\n\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"D:\PROJETOS\IONIC\criptomatica\src\pages\inicio\inicio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], InicioPage);
    return InicioPage;
}());

//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 128:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 128;

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cripto01/cripto01.module": [
		304,
		20
	],
	"../pages/cripto02/cripto02.module": [
		305,
		19
	],
	"../pages/cripto03/cripto03.module": [
		309,
		18
	],
	"../pages/cripto04/cripto04.module": [
		290,
		17
	],
	"../pages/cripto05/cripto05.module": [
		291,
		16
	],
	"../pages/cripto06/cripto06.module": [
		292,
		15
	],
	"../pages/cripto07/cripto07.module": [
		293,
		14
	],
	"../pages/decripto01/decripto01.module": [
		294,
		13
	],
	"../pages/decripto02/decripto02.module": [
		295,
		12
	],
	"../pages/decripto03/decripto03.module": [
		296,
		11
	],
	"../pages/decripto04/decripto04.module": [
		297,
		10
	],
	"../pages/decripto05/decripto05.module": [
		298,
		9
	],
	"../pages/decripto06/decripto06.module": [
		299,
		8
	],
	"../pages/decripto07/decripto07.module": [
		300,
		7
	],
	"../pages/decripto08/decripto08.module": [
		301,
		6
	],
	"../pages/determinante/determinante.module": [
		303,
		5
	],
	"../pages/hill/hill.module": [
		302,
		4
	],
	"../pages/inicio/inicio.module": [
		310,
		3
	],
	"../pages/mdc/mdc.module": [
		306,
		2
	],
	"../pages/primos/primos.module": [
		307,
		1
	],
	"../pages/sobre/sobre.module": [
		308,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 169;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeterminantePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DeterminantePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DeterminantePage = /** @class */ (function () {
    function DeterminantePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DeterminantePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DeterminantePage');
    };
    DeterminantePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-determinante',template:/*ion-inline-start:"D:\PROJETOS\IONIC\criptomatica\src\pages\determinante\determinante.html"*/'<ion-header>\n  <meu-cabecalho>\n  </meu-cabecalho>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\PROJETOS\IONIC\criptomatica\src\pages\determinante\determinante.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DeterminantePage);
    return DeterminantePage;
}());

//# sourceMappingURL=determinante.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdcPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MdcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MdcPage = /** @class */ (function () {
    function MdcPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MdcPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MdcPage');
    };
    MdcPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mdc',template:/*ion-inline-start:"D:\PROJETOS\IONIC\criptomatica\src\pages\mdc\mdc.html"*/'<!--\n  Generated template for the MdcPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>mdc</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\PROJETOS\IONIC\criptomatica\src\pages\mdc\mdc.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MdcPage);
    return MdcPage;
}());

//# sourceMappingURL=mdc.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrimosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PrimosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrimosPage = /** @class */ (function () {
    function PrimosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PrimosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrimosPage');
    };
    PrimosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-primos',template:/*ion-inline-start:"D:\PROJETOS\IONIC\criptomatica\src\pages\primos\primos.html"*/'<ion-header>\n  <meu-cabecalho>\n  </meu-cabecalho>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\PROJETOS\IONIC\criptomatica\src\pages\primos\primos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PrimosPage);
    return PrimosPage;
}());

//# sourceMappingURL=primos.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(238);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_hill_hill__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_decripto02_decripto02__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_decripto01_decripto01__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_cripto07_cripto07__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_cripto06_cripto06__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_cripto05_cripto05__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cripto03_cripto03__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_cripto02_cripto02__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cripto01_cripto01__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_inicio_inicio__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_cripto04_cripto04__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_decripto03_decripto03__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_decripto04_decripto04__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_decripto05_decripto05__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_decripto06_decripto06__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_decripto07_decripto07__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_decripto08_decripto08__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_primos_primos__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_mdc_mdc__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_determinante_determinante__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_sobre_sobre__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__model_matriz__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_meu_cabecalho_meu_cabecalho__ = __webpack_require__(289);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_11__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_cripto01_cripto01__["a" /* Cripto01Page */],
                __WEBPACK_IMPORTED_MODULE_7__pages_cripto02_cripto02__["a" /* Cripto02Page */],
                __WEBPACK_IMPORTED_MODULE_6__pages_cripto03_cripto03__["a" /* Cripto03Page */],
                __WEBPACK_IMPORTED_MODULE_16__pages_cripto04_cripto04__["a" /* Cripto04Page */],
                __WEBPACK_IMPORTED_MODULE_5__pages_cripto05_cripto05__["a" /* Cripto05Page */],
                __WEBPACK_IMPORTED_MODULE_4__pages_cripto06_cripto06__["a" /* Cripto06Page */],
                __WEBPACK_IMPORTED_MODULE_3__pages_cripto07_cripto07__["a" /* Cripto07Page */],
                __WEBPACK_IMPORTED_MODULE_2__pages_decripto01_decripto01__["a" /* Decripto01Page */],
                __WEBPACK_IMPORTED_MODULE_1__pages_decripto02_decripto02__["a" /* Decripto02Page */],
                __WEBPACK_IMPORTED_MODULE_17__pages_decripto03_decripto03__["a" /* Decripto03Page */],
                __WEBPACK_IMPORTED_MODULE_18__pages_decripto04_decripto04__["a" /* Decripto04Page */],
                __WEBPACK_IMPORTED_MODULE_19__pages_decripto05_decripto05__["a" /* Decripto05Page */],
                __WEBPACK_IMPORTED_MODULE_20__pages_decripto06_decripto06__["a" /* Decripto06Page */],
                __WEBPACK_IMPORTED_MODULE_21__pages_decripto07_decripto07__["a" /* Decripto07Page */],
                __WEBPACK_IMPORTED_MODULE_22__pages_decripto08_decripto08__["a" /* Decripto08Page */],
                __WEBPACK_IMPORTED_MODULE_23__pages_primos_primos__["a" /* PrimosPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_mdc_mdc__["a" /* MdcPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_determinante_determinante__["a" /* DeterminantePage */],
                __WEBPACK_IMPORTED_MODULE_28__components_meu_cabecalho_meu_cabecalho__["a" /* MeuCabecalhoComponent */],
                __WEBPACK_IMPORTED_MODULE_26__pages_sobre_sobre__["a" /* SobrePage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_hill_hill__["a" /* HillPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cripto04/cripto04.module#Cripto04PageModule', name: 'Cripto04Page', segment: 'cripto04', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cripto05/cripto05.module#Cripto05PageModule', name: 'Cripto05Page', segment: 'cripto05', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cripto06/cripto06.module#Cripto06PageModule', name: 'Cripto06Page', segment: 'cripto06', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cripto07/cripto07.module#Cripto07PageModule', name: 'Cripto07Page', segment: 'cripto07', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/decripto01/decripto01.module#Decripto01PageModule', name: 'Decripto01Page', segment: 'decripto01', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/decripto02/decripto02.module#Decripto02PageModule', name: 'Decripto02Page', segment: 'decripto02', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/decripto03/decripto03.module#Decripto03PageModule', name: 'Decripto03Page', segment: 'decripto03', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/decripto04/decripto04.module#Decripto04PageModule', name: 'Decripto04Page', segment: 'decripto04', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/decripto05/decripto05.module#Decripto05PageModule', name: 'Decripto05Page', segment: 'decripto05', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/decripto06/decripto06.module#Decripto06PageModule', name: 'Decripto06Page', segment: 'decripto06', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/decripto07/decripto07.module#Decripto07PageModule', name: 'Decripto07Page', segment: 'decripto07', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/decripto08/decripto08.module#Decripto08PageModule', name: 'Decripto08Page', segment: 'decripto08', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hill/hill.module#HillPageModule', name: 'HillPage', segment: 'hill', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/determinante/determinante.module#DeterminantePageModule', name: 'DeterminantePage', segment: 'determinante', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cripto01/cripto01.module#Cripto01PageModule', name: 'Cripto01Page', segment: 'cripto01', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cripto02/cripto02.module#Cripto02PageModule', name: 'Cripto02Page', segment: 'cripto02', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mdc/mdc.module#MdcPageModule', name: 'MdcPage', segment: 'mdc', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/primos/primos.module#PrimosPageModule', name: 'PrimosPage', segment: 'primos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sobre/sobre.module#SobrePageModule', name: 'SobrePage', segment: 'sobre', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cripto03/cripto03.module#Cripto03PageModule', name: 'Cripto03Page', segment: 'cripto03', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inicio/inicio.module#InicioPageModule', name: 'InicioPage', segment: 'inicio', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_28__components_meu_cabecalho_meu_cabecalho__["a" /* MeuCabecalhoComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_cripto01_cripto01__["a" /* Cripto01Page */],
                __WEBPACK_IMPORTED_MODULE_7__pages_cripto02_cripto02__["a" /* Cripto02Page */],
                __WEBPACK_IMPORTED_MODULE_6__pages_cripto03_cripto03__["a" /* Cripto03Page */],
                __WEBPACK_IMPORTED_MODULE_16__pages_cripto04_cripto04__["a" /* Cripto04Page */],
                __WEBPACK_IMPORTED_MODULE_5__pages_cripto05_cripto05__["a" /* Cripto05Page */],
                __WEBPACK_IMPORTED_MODULE_4__pages_cripto06_cripto06__["a" /* Cripto06Page */],
                __WEBPACK_IMPORTED_MODULE_3__pages_cripto07_cripto07__["a" /* Cripto07Page */],
                __WEBPACK_IMPORTED_MODULE_2__pages_decripto01_decripto01__["a" /* Decripto01Page */],
                __WEBPACK_IMPORTED_MODULE_1__pages_decripto02_decripto02__["a" /* Decripto02Page */],
                __WEBPACK_IMPORTED_MODULE_17__pages_decripto03_decripto03__["a" /* Decripto03Page */],
                __WEBPACK_IMPORTED_MODULE_18__pages_decripto04_decripto04__["a" /* Decripto04Page */],
                __WEBPACK_IMPORTED_MODULE_19__pages_decripto05_decripto05__["a" /* Decripto05Page */],
                __WEBPACK_IMPORTED_MODULE_20__pages_decripto06_decripto06__["a" /* Decripto06Page */],
                __WEBPACK_IMPORTED_MODULE_21__pages_decripto07_decripto07__["a" /* Decripto07Page */],
                __WEBPACK_IMPORTED_MODULE_22__pages_decripto08_decripto08__["a" /* Decripto08Page */],
                __WEBPACK_IMPORTED_MODULE_23__pages_primos_primos__["a" /* PrimosPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_mdc_mdc__["a" /* MdcPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_determinante_determinante__["a" /* DeterminantePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_sobre_sobre__["a" /* SobrePage */],
                __WEBPACK_IMPORTED_MODULE_28__components_meu_cabecalho_meu_cabecalho__["a" /* MeuCabecalhoComponent */],
                __WEBPACK_IMPORTED_MODULE_0__pages_hill_hill__["a" /* HillPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_27__model_matriz__["a" /* matriz */],
                { provide: __WEBPACK_IMPORTED_MODULE_11__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_12_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_sobre_sobre__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_hill_hill__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_inicio_inicio__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_inicio_inicio__["a" /* InicioPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { icon: 'home', title: 'INICIO', component: __WEBPACK_IMPORTED_MODULE_2__pages_inicio_inicio__["a" /* InicioPage */] },
            { icon: 'key', title: 'CRIPTOGRAFIA DE HILL', component: __WEBPACK_IMPORTED_MODULE_1__pages_hill_hill__["a" /* HillPage */] },
            { icon: 'information-circle', title: 'SOBRE', component: __WEBPACK_IMPORTED_MODULE_0__pages_sobre_sobre__["a" /* SobrePage */] },
            { icon: 'exit', title: 'SAIR', component: __WEBPACK_IMPORTED_MODULE_2__pages_inicio_inicio__["a" /* InicioPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\PROJETOS\IONIC\criptomatica\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <div class=\'center\'>\n      <img src="assets/imgs/menu.png">\n      </div>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <!-- <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n        ss\n      </button> -->\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon [name]="p.icon" item-left></ion-icon>\n         {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\PROJETOS\IONIC\criptomatica\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeuCabecalhoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MeuCabecalhoComponent = /** @class */ (function () {
    function MeuCabecalhoComponent() {
    }
    MeuCabecalhoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'meu-cabecalho',template:/*ion-inline-start:"D:\PROJETOS\IONIC\criptomatica\src\components\meu-cabecalho\meu-cabecalho.html"*/'<ion-navbar hideBackButton="false">\n\n  <button ion-button menuToggle start>\n    <ion-icon name="ios-menu-outline"></ion-icon>\n  </button>\n \n  <ion-title>CRIPTOMÁTICA</ion-title>\n\n  <ion-buttons end>\n    <button ion-button icon-only (click)="action1()">\n      <ion-icon name="close"></ion-icon>\n    </button>\n\n  </ion-buttons>\n</ion-navbar>'/*ion-inline-end:"D:\PROJETOS\IONIC\criptomatica\src\components\meu-cabecalho\meu-cabecalho.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MeuCabecalhoComponent);
    return MeuCabecalhoComponent;
}());

//# sourceMappingURL=meu-cabecalho.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return matriz; });
var matriz = /** @class */ (function () {
    function matriz() {
        this.elemento = [];
        this.alfabeto = new Array(32);
        this.carregaAlfabeto();
        // this.converterLN("A");
    }
    matriz.prototype.getdeterminante = function () {
        return this.determinante;
    };
    matriz.prototype.getlinha = function () {
        return this.linha;
    };
    matriz.prototype.getcoluna = function () {
        return this.coluna;
    };
    matriz.prototype.gettamanhoMensagem = function () {
        return this.tamanhoMensagem;
    };
    matriz.prototype.setdeterminante = function (value) {
        this.determinante = value;
    };
    matriz.prototype.setlinha = function (value) {
        this.linha = value;
    };
    matriz.prototype.setcoluna = function (value) {
        this.coluna = value;
    };
    matriz.prototype.settamanhoMensagem = function (value) {
        this.tamanhoMensagem = value;
    };
    matriz.prototype.iniciarMatrizNumerica = function (colunay, linhax) {
        this.setlinha(linhax);
        this.setcoluna(colunay);
        for (var coluna = 0; coluna < this.coluna; coluna++) {
            this.elemento[coluna] = [];
            for (var linha = 0; linha < this.linha; linha++) {
                this.elemento[coluna][linha] = '';
                console.log('elemento: i[' + coluna + '], j[' + linha + ']= ' + this.elemento[coluna][linha]);
            }
        }
    };
    matriz.prototype.iniciarMatrizLetras = function (frase) {
        this.obterTamanho(frase);
        console.log('coluna:' + this.coluna);
        var cont = 0;
        for (var coluna = 0; coluna < this.coluna; coluna++) {
            this.elemento[coluna] = [];
            for (var linha = 0; linha < 2; linha++) {
                this.elemento[coluna][linha] = frase.substr(cont, 1);
                console.log('elemento: i[' + coluna + '], j[' + linha + ']= ' + this.elemento[coluna][linha]);
                cont++;
            }
        }
    };
    matriz.prototype.obterTamanho = function (frase) {
        var tamanho;
        console.log('tamanho da frase:' + frase.length);
        tamanho = frase.length;
        if (tamanho % 2 == 0) {
            this.coluna = tamanho / 2;
            this.conteudo = frase;
        }
        else {
            this.coluna = (tamanho + 1) / 2;
            this.conteudo = frase.concat('');
        }
    };
    matriz.prototype.calcularDeterminante = function () {
        this.determinante = this.elemento[0][0] * this.elemento[1][1] - (this.elemento[1][0] * this.elemento[0][1]);
        console.log("determinante" + this.determinante);
    };
    matriz.prototype.calcularCondruente = function (valor) {
        var congruente;
        if (valor < 0) {
            while (valor < 0) {
                valor = valor + 32;
            }
        }
        if (valor > 31) {
            while (valor > 31) {
                valor = valor - 32;
            }
        }
        congruente = valor;
        console.log("congruente: " + congruente);
        return congruente;
    };
    matriz.prototype.converterNL = function (numero) {
        var letra;
        letra = this.alfabeto[numero];
        console.log("numero: " + numero + "letra: " + letra);
        return letra;
    };
    matriz.prototype.converterLN = function (letra) {
        var numero;
        for (var j = 0; j < 32; j++) {
            if (this.alfabeto[j] == letra) {
                numero = j;
            }
        }
        console.log("numero: " + numero);
        return numero;
    };
    matriz.prototype.carregaAlfabeto = function () {
        for (var i = 0; i < 26; i++) {
            this.alfabeto[i] = String.fromCharCode(65 + i);
        }
        this.alfabeto[26] = String.fromCharCode(44);
        this.alfabeto[27] = String.fromCharCode(46);
        this.alfabeto[28] = String.fromCharCode(59);
        this.alfabeto[29] = String.fromCharCode(33);
        this.alfabeto[30] = String.fromCharCode(63);
        this.alfabeto[31] = "";
        for (var j = 0; j < 32; j++) {
            console.log("str.charAt(" + j + ") is:" + this.alfabeto[j]);
        }
    };
    return matriz;
}());

//# sourceMappingURL=matriz.js.map

/***/ })

},[215]);
//# sourceMappingURL=main.js.map