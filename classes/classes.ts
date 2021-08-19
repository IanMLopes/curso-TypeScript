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
    private alterarVelocidade(delta: number): number {
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
    
