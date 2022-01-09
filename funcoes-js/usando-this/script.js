const pessoa1 = {
    nome: "Maria",
    idade: 35
}

const pessoa2 = {
    nome: "jose",
    idade: 30
}

const pessoa3 = {
    nome: "joao",
    idade: 29
}

function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade} anos de idade.`;
}

console.log(calculaIdade.apply(pessoa1, [5]))
