"use strict";
// string
let nome = 'joão';
console.log(nome);
// nome = 28
// number 
let idade = 27;
idade = 27.5;
console.log(idade);
// boolean
let possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);
// tipos explicitos
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
let hobbies = ["cozinha", "Prati ar esporte"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
// hobbies = 100
console.log(hobbies);
// Tuplas
let endereco = ["av principal", 99, "bloco C"];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
// any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
// Funcão  
function retornarMeuNome() {
    return nome;
}
console.log(retornarMeuNome());
function digaOi() {
    console.log('oi');
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(4.5, 5));
// tipo função
let calculo;
calculo = multiplicar;
console.log(calculo(5, 6));
// objetos
let usuario = {
    nome: 'joão',
    idade: 27
};
console.log(usuario);
usuario = {
    idade: 32,
    nome: 'Maria'
};
console.log(usuario);
let funcionario = {
    supervisores: ["Ana", "Fernando"],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
// fim desafio
let funcionario2 = {
    supervisores: ["Bia", "Carlos"],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
// Unios types
let nota = 10;
console.log(`minha note é ${nota}`);
nota = '10';
console.log(`minha nota  é ${nota}`);
// checando tipos 
let valor = '10';
if (typeof valor === "number") {
    console.log("é um number ");
}
else {
    console.log("é um", typeof valor);
}
// Never 
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'sabão',
    preco: 4,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco < -0) {
            falha('Preco invalido!');
        }
    }
};
produto.validarProduto();
let altura = 12;
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: "fulano",
    tel1: "929293343",
    tel2: null
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
let podeSerNulo = null; //any
podeSerNulo = 12;
console.log(podeSerNulo);
podeSerNulo = "abc";
console.log(podeSerNulo);
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipos.js.map