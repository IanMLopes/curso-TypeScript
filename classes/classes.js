"use strict";
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        if (dia === void 0) { dia = 1; }
        if (mes === void 0) { mes = 1; }
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return Data;
}());
var aniversario = new Data(3, 11, 1991);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);
var casamento = new Data; // posso omitir os "()"
casamento.ano = 2017;
console.log(casamento);
var DataEsperto = /** @class */ (function () {
    function DataEsperto(dia, mes, ano) {
        if (dia === void 0) { dia = 1; }
        if (mes === void 0) { mes = 1; }
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return DataEsperto;
}());
var aniversarioEsperto = new DataEsperto(3, 11, 1991);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);
var casamentoEsperto = new DataEsperto; // posso omitir os "()"
casamento.ano = 2017;
console.log(casamento);
// Desafio
var Produto = /** @class */ (function () {
    function Produto(nome, preco, desconto) {
        if (desconto === void 0) { desconto = 0; }
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    Produto.prototype.precoDomDesconto = function () {
        return this.preco * (1 - this.desconto);
    };
    Produto.prototype.resumo = function () {
        return this.nome + " custa R$" + this.precoDomDesconto() + " (" + this.desconto * 1000 + "% off)";
    };
    return Produto;
}());
var prod1 = new Produto('Caneta Bic Preta', 4.20);
prod1.desconto = 0.06;
console.log(prod1.resumo());
var prod2 = new Produto('Caderno escolar', 18.80, 0.15);
console.log(prod2.resumo());
var Carro = /** @class */ (function () {
    function Carro(marca, modelo, velocidadeMaxima) {
        if (velocidadeMaxima === void 0) { velocidadeMaxima = 200; }
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    Carro.prototype.alterarVelocidade = function (delta) {
        var novaVelocidade = this.velocidadeAtual + delta;
        var velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    };
    Carro.prototype.acelerar = function () {
        return this.alterarVelocidade(15);
    };
    Carro.prototype.frear = function () {
        return this.alterarVelocidade(-5);
    };
    return Carro;
}());
var carro1 = new Carro('Ford', 'Ka', 185);
// Array(50).fill(0).forEach(() => carro1.acelerar())
console.log(carro1.acelerar());
// Array(20).fill(0).forEach(() => carro1.frear())
console.log(carro1.frear());
//# sourceMappingURL=classes.js.map