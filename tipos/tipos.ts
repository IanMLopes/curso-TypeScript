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