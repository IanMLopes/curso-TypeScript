// string
let nome: string = 'joão'
console.log(nome)
// nome = 28

// number 
let idade: number = 27

idade = 27.5
console.log(idade)

// boolean
let possuiHobbies: boolean = false
// possuiHobbies = 1
console.log(possuiHobbies)

// tipos explicitos
let minhaIdade: number
minhaIdade = 27

console.log(typeof minhaIdade)

let hobbies: any[] = ["cozinha", "Prati ar esporte"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
// hobbies = 100
console.log(hobbies)

// Tuplas
let endereco: [string, number, string] = ["av principal", 99, "bloco C"]

console.log(endereco)

// enums

enum Cor {
    Cinza,
    Verde = 100,
    Azul = 10,
    Laranja,
    Amarelo,
    Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)
console.log(Cor.Verde, Cor.Vermelho)

// any
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2019 }
console.log(carro)

// Funcão  
function retornarMeuNome(): string {
    return nome
}

console.log(retornarMeuNome())

function digaOi(): void {
    console.log('oi')
}

digaOi()

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}

console.log(multiplicar(4.5, 5))

// tipo função
let calculo: (x: number, y: number) => number

calculo = multiplicar
console.log(calculo (5, 6))

// objetos

let usuario: {nome: string, idade: number} = {
    nome:'joão',
    idade: 27
}

console.log(usuario)

usuario = {
    idade: 32,
    nome: 'Maria'
}
console.log(usuario)

// Desafio
// Alias
type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string
}

let funcionario: Funcionario  = {
    supervisores: ["Ana", "Fernando"],
    baterPonto(horario: number): string{
        if (horario <= 8) {
            return 'Ponto normal'
        } else {
            return 'Fora do horário'
        }
    }
}
// fim desafio

let funcionario2: Funcionario = {
    supervisores: ["Bia", "Carlos"],
    baterPonto(horario: number): string{
        if (horario <= 8) {
            return 'Ponto normal'
        } else {
            return 'Fora do horário'
        }
    }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))

// Unios types
let nota: number | string = 10
console.log(`minha note é ${nota}`)
nota = '10'
console.log(`minha nota  é ${nota}`)

// checando tipos 
let valor = '10'

if (typeof valor === "number") {
    console.log("é um number ")
} else {
    console.log("é um", typeof valor )
}

// Never 
function falha(msg: string): never {
    throw  new Error(msg)
}

const produto = {
    nome: 'sabão',
    preco: 4,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome')
        }
        if (this.preco < - 0) {
            falha('Preco invalido!')
        }
    }
}
produto.validarProduto()

let altura = 12

let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: Contato = {
    nome: "fulano",
    tel1: "929293343",
    tel2: null
}

console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)

let podeSerNulo = null //any
podeSerNulo = 12
console.log(podeSerNulo)

podeSerNulo = "abc"
console.log(podeSerNulo)


// DESAFIO


type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}

let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor: number) {
        this.saldo += valor
    }
}

type Correntista = {
    nome: String,
    contaBancaria: ContaBancaria
    contatos: string[]
}
 
let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}
 
correntista.contaBancaria.depositar(3000)
console.log(correntista)
