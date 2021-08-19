class Data {
    // publico por padrão
    dia: number
    public mes: number
    ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversario = new Data(3, 11, 1991)
aniversario.dia = 4
console.log(aniversario.dia)
console.log(aniversario)

const casamento = new Data  // posso omitir os "()"
casamento.ano = 2017
console.log(casamento)




class DataEsperto {

    constructor( public dia: number = 1, public mes: number = 1, public ano: number = 1970) {
    }
}

const aniversarioEsperto = new DataEsperto(3, 11, 1991)
aniversario.dia = 4
console.log(aniversario.dia)
console.log(aniversario)

const casamentoEsperto = new DataEsperto  // posso omitir os "()"
casamento.ano = 2017
console.log(casamento)


// Desafio

class Produto {
    constructor(public nome: string, public preco: number, public desconto: number = 0) {
    }

    precoDomDesconto(): number {
        return this.preco * (1 - this.desconto)
    }

    public resumo(): string {
        return `${this.nome} custa R$${this.precoDomDesconto()} (${this.desconto * 1000}% off)`
    }
}
const prod1 = new Produto('Caneta Bic Preta', 4.20)
prod1.desconto = 0.06
console.log(prod1.resumo())

const prod2 = new Produto('Caderno escolar', 18.80, 0.15)
console.log(prod2.resumo())


class Carro {
    private velocidadeAtual: number = 0

    constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200) {
    }
    protected alterarVelocidade(delta: number): number {
        const novaVelocidade = this.velocidadeAtual + delta
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima

        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0 
        }
        return this.velocidadeAtual
    }
    public acelerar(): number {
        return this.alterarVelocidade(15)
    }
    public frear(): number {
        return this.alterarVelocidade(-5)
    }
}

const carro1 = new Carro('Ford', 'Ka', 185)

// Array(50).fill(0).forEach(() => carro1.acelerar())
console.log(carro1.acelerar())

// Array(20).fill(0).forEach(() => carro1.frear())
console.log(carro1.frear())
    
class Ferrari extends Carro {
    constructor(modelo: string, velocidadeMaxima: number) {
        super('Ferrari', modelo, velocidadeMaxima)
    }


    public acelerar(): number {
        return this.alterarVelocidade(20)
    }

    public frear(): number {
        return this.alterarVelocidade(-15)
    }
}

const f40 = new Ferrari('F40', 324)
console.log(`${f40.marca} ${f40.modelo}`)
console.log(f40.acelerar())
console.log(f40.frear())

// Getters & Setters

class Pessoa {
    private _idade: number = 0

    get idade(): number {
        return this._idade
    }

    set idade(valor: number) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor
        }
    }
}

const pessoa1 = new Pessoa
pessoa1.idade = 10
console.log(pessoa1.idade)

pessoa1.idade = -3
console.log(pessoa1.idade)

// atributos e metodos estatios

class Matematica {
    static PI: number = 3.1416

    static areaCirc(raio: number): number {
        return this.PI * raio * raio
    }
}

console.log(Matematica.areaCirc(4))

// classe abstrata
abstract class Calculo {
    private resultado: number = 0

    abstract executar(...numeros: number[]): void

    getResultado(): number {
        return this.resultado
    }
}

class Soma extends Calculo {
    executar(...numeros: number[]): void {
        
    }
}