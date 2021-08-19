"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
// let & const
var seraQuePode = '?';
console.log(seraQuePode);
var estaFrio = true;
if (estaFrio) {
    var acao = 'Colocar o casaco!';
    console.log(acao);
}
var cpf = '123.456.345.34';
// cpf = '124.323.456-58'
console.log(cpf);
var segredo = 'externo';
function revelar() {
    var segredo = 'interno';
    console.log(segredo);
}
revelar();
console.log(segredo);
{
    {
        var def = 'def';
        console.log(def);
    }
}
for (var i = 0; i < 10; i++) {
    console.log(i);
}
// console.log(i)
// Arrow Function
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(2, 3));
var subtrair = function (n1, n2) { return n1 - n2; };
console.log(subtrair(2, 3));
var saudacao = function () { return console.log("Óla!"); };
saudacao();
var falarCom = function (pessoa) { return console.log('Óla' + pessoa); };
falarCom("João");
// function normalComThis() {
//     console.log(this)
// }
// const normalComThisEspecial = normalComThis.bind({ nome: 'Ana' })
// normalComThisEspecial()
// console.log(this)
// const arrowComThis = () => console.log(this)
// arrowComThis()
// Parâmetro padrão
function contagemRegressiva(inicio, fim) {
    if (inicio === void 0) { inicio = 5; }
    if (fim === void 0) { fim = inicio - 5; }
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log("FIM");
}
contagemRegressiva();
contagemRegressiva(3);
// Rest & Spread
var numbers = [1, 10, 99, -5, 300, 1034];
console.log(Math.max.apply(Math, numbers));
var turmaA = ['João', 'Maria', 'Fernanda'];
var turmaB = __spreadArray(['Fernando', 'Miguel', 'Lorena'], turmaA);
console.log(turmaB);
function retornarArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
var numeros = retornarArray(1, 2, 3, 4, 5, 6, 20, 55);
console.log(numeros);
console.log(retornarArray.apply(void 0, numbers));
// Rest & spresd (tupla)
var tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log("1), " + a + " " + b + " " + c);
}
tuplaParam1.apply(void 0, tupla);
function tuplaParams() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    console.log(Array.isArray(params));
    console.log("2) " + params[0] + " " + params[1] + " " + params[2] + "  ");
}
tuplaParams.apply(void 0, tupla);
// Destructuring(array)
var caracteristicas = ['Motor zetec 1.8', 2020];
var motor = caracteristicas[0], ano = caracteristicas[1];
console.log(motor);
console.log(ano);
// Destructuring(onjeto)
var item = {
    nome: 'SSd',
    preco: 200,
    caracteristicas: {
        w: 'importado'
    }
};
var nomeItem = item.nome;
var precoItem = item.preco;
console.log(nomeItem);
console.log(precoItem);
var n = item.nome, preco = item.preco, w = item.caracteristicas.w;
console.log(n);
console.log(preco);
console.log(w);
var usuarioID = 'suporte';
var notificacoes = '0';
var boasVindas = 'Boas vindas ' + usuarioID + ' notificacões ' + notificacoes;
console.log(boasVindas);
// Desafio
// Ex: 1
var dobro = function (valor) { return valor * 2; };
console.log(dobro(10));
// Ex:2
var dizerOla = function (nome) {
    if (nome === void 0) { nome = 'Pessoa'; }
    console.log('Óla, ' + nome);
};
dizerOla();
dizerOla('Anna');
// Ex: 3
var nums = [-3, 33, 38, 5];
// imprimir meno valor
console.log(Math.min.apply(Math, nums));
// Ex: 4
var array = [55, 20];
//  add todos elementos nums em array
array.push.apply(array, nums);
console.log(array);
// Ex:5
var notas = [8.5, 6.3, 9.4];
var nota1 = notas[0], nota2 = notas[1], nota3 = notas[2];
console.log(nota1, nota2, nota3);
// Ex: 6
var cientista = { primeiroNome: 'Will', experiencia: 12 };
var primeiroNome = cientista.primeiroNome, experiencia = cientista.experiencia;
console.log(primeiroNome, experiencia);
//callback
// function esperar3s(callback: (dado: string) => void) {
//     setTimeout(() => {
//         callback('3s depois ...')
//     }, 3000)
// }
// esperar3s(function (resultado: string) {
//     console.log(resultado)
// })
// function esperar3sPromise() {
//     return new Promise ((resolve: any)=> {
//         setTimeout(() => {
//             resolve('3s depois Promise ... ')
//         }, 3000)
//     })
// }
// esperar3sPromise().then((dado: any) => console.log(dado))
// fetch('https://swapi.dev/api/people/1')
//     .then(res => res.json())
//     .then(personagem => personagem.films)
//     .then(films => fetch(films[0]))
//     .then(resFilm => resFilm.json())
//     .then(filme => console.log(filme.title))
//     .catch(err => console.log('catch'+ err))
//# sourceMappingURL=ecmascript.js.map