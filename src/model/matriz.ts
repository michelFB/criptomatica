export class matriz {

    private determinante: number;
    private linha: number;
    private coluna: number;
    private tamanhoMensagem: number;
    public elemento: any[] = [];
    public alfabeto: String[] = new Array(32);
    public conteudo: string;

    public getdeterminante(): number {
        return this.determinante;
    }
    public getlinha(): number {
        return this.linha;
    }
    public getcoluna(): number {
        return this.coluna;
    }
    public gettamanhoMensagem(): number {
        return this.tamanhoMensagem;
    }

    public setdeterminante(value: number) {
        this.determinante = value;
    }
    public setlinha(value: number) {
        this.linha = value;
    }
    public setcoluna(value: number) {
        this.coluna = value;
    }
    public settamanhoMensagem(value: number) {
        this.tamanhoMensagem = value;
    }

    constructor() {
        this.carregaAlfabeto();
        // this.converterLN("A");
    }

    iniciarMatrizNumerica(colunay: number, linhax: number,) {
        this.setlinha(linhax);
        this.setcoluna(colunay);
        for (var coluna = 0; coluna < this.coluna; coluna++) {
            this.elemento[coluna] = [];
            for (var linha: number = 0; linha < this.linha; linha++) {
                this.elemento[coluna][linha] = '';
                console.log('elemento: i[' + coluna + '], j[' + linha + ']= ' + this.elemento[coluna][linha]);
            }
        }
    }

    iniciarMatrizLetras(frase: string) {
        this.obterTamanho(frase);
        console.log('coluna:' + this.coluna);
        var cont = 0;
        for (var coluna = 0; coluna < this.coluna; coluna++) {
            this.elemento[coluna] = [];
            for (var linha: number = 0; linha < 2; linha++) {
                this.elemento[coluna][linha] = frase.substr(cont, 1);
                console.log('elemento: i[' + coluna + '], j[' + linha + ']= ' + this.elemento[coluna][linha]);
                cont++;
            }
        }
    }

    obterTamanho(frase: string) {
        var tamanho: number;
        console.log('tamanho da frase:' + frase.length);
        tamanho = frase.length;
        if (tamanho % 2 == 0) {
            this.coluna = tamanho / 2;
            this.conteudo = frase;
        } else {
            this.coluna = (tamanho + 1) / 2;
            this.conteudo = frase.concat('');
        }
    }

    calcularDeterminante() {
        this.determinante = this.elemento[0][0] * this.elemento[1][1] - (this.elemento[1][0] * this.elemento[0][1]);
        console.log("determinante" + this.determinante);
    }

    calcularCondruente(valor: number): number {
        var congruente: number;

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
    }


    converterNL(numero: number): string {
        var letra;
        letra = this.alfabeto[numero];
        console.log("numero: " + numero + "letra: " + letra);
        return letra;
    }

    converterLN(letra: string): number {
        var numero: number;
        for (var j = 0; j < 32; j++) {
            if (this.alfabeto[j] == letra) {
                numero = j;
            }
        }
        console.log("numero: " + numero);
        return numero;
    }
        carregaAlfabeto(){
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
        }
    }



