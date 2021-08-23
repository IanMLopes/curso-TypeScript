"use strict";
// let & const
let seraQuePode = '?';
console.log(seraQuePode);
let estaFrio = true;
if (estaFrio) {
    let acao = 'Colocar o casaco!';
    console.log(acao);
}
const cpf = '123.456.345.34';
// cpf = '124.323.456-58'
console.log(cpf);
var segredo = 'externo';
function revelar() {
    const segredo = 'interno';
    console.log(segredo);
}
revelar();
console.log(segredo);
{
    {
        const def = 'def';
        console.log(def);
    }
}
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// console.log(i)
// Arrow Function
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(2, 3));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(2, 3));
const saudacao = () => console.log("Óla!");
saudacao();
const falarCom = (pessoa) => console.log('Óla' + pessoa);
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
function contagemRegressiva(inicio = 5, fim = inicio - 5) {
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
const numbers = [1, 10, 99, -5, 300, 1034];
console.log(Math.max(...numbers));
const turmaA = ['João', 'Maria', 'Fernanda'];
const turmaB = ['Fernando', 'Miguel', 'Lorena', ...turmaA];
console.log(turmaB);
function retornarArray(...args) {
    return args;
}
const numeros = retornarArray(1, 2, 3, 4, 5, 6, 20, 55);
console.log(numeros);
console.log(retornarArray(...numbers));
// Rest & spresd (tupla)
const tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log(`1), ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
function tuplaParams(...params) {
    console.log(Array.isArray(params));
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}  `);
}
tuplaParams(...tupla);
// Destructuring(array)
const caracteristicas = ['Motor zetec 1.8', 2020];
const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);
// Destructuring(onjeto)
const item = {
    nome: 'SSd',
    preco: 200,
    caracteristicas: {
        w: 'importado'
    }
};
const nomeItem = item.nome;
const precoItem = item.preco;
console.log(nomeItem);
console.log(precoItem);
const { nome: n, preco, caracteristicas: { w } } = item;
console.log(n);
console.log(preco);
console.log(w);
const usuarioID = 'suporte';
const notificacoes = '0';
const boasVindas = 'Boas vindas ' + usuarioID + ' notificacões ' + notificacoes;
console.log(boasVindas);
// Desafio
// Ex: 1
const dobro = (valor) => valor * 2;
console.log(dobro(10));
// Ex:2
const dizerOla = function (nome = 'Pessoa') {
    console.log('Óla, ' + nome);
};
dizerOla();
dizerOla('Anna');
// Ex: 3
const nums = [-3, 33, 38, 5];
// imprimir meno valor
console.log(Math.min(...nums));
// Ex: 4
const array = [55, 20];
//  add todos elementos nums em array
array.push(...nums);
console.log(array);
// Ex:5
const notas = [8.5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);
// Ex: 6
const cientista = { primeiroNome: 'Will', experiencia: 12 };
const { primeiroNome, experiencia } = cientista;
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