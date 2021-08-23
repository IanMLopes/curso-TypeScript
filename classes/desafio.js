"use strict";
// Exercício 1 - Classe
class Moto {
    constructor(nome) {
        this.nome = nome;
        this.velocidade = 0;
    }
    buzinar() {
        console.log('aa');
    }
    acelerar(delta) {
        this.velocidade = this.velocidade + delta;
    }
}
console.log("AAA");
// function Moto(nome) {
//     this.nome = nome
//     this.velocidade = 0
//     this.buzinar = function() {
//         console.log('Toooooooooot!')
//     }
//     this.acelerar= function(delta) {
//         this.velocidade = this.velocidade + delta
//     }
// }
var moto = new Moto('Ducati');
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
// Exercício 2 - Herança
class Objeto2D {
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
    }
}
class Retangulo extends Objeto2D {
    area() {
        return this.base * this.altura;
    }
}
const retangulo = new Retangulo(5, 7);
retangulo.base = 5;
console.log(retangulo.area());
// Exercício 3 - Getters & Setters
class Estagiario {
    constructor() {
        this._primeiroNome = '';
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor;
        }
        else {
            this._primeiroNome = '';
        }
    }
}
const estagiario = new Estagiario;
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Le';
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Leonardo';
console.log(estagiario.primeiroNome);
//# sourceMappingURL=desafio.js.map