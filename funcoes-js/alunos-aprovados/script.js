// Criado uma função que recebe o array alunos e um numero que representa a média final.
// Criando um novo array apenas com os alunos que suas notas são maiores que a média final
// Utilizando a técnica de object destructuring para manipular as propriedades de cada aluno

const alunos = [
    {
        nome: "Willians",
        idade: 36,
        nota: 9,
        turma: '22'
    },
    {
        nome: "joao",
        idade: 9,
        nota: 7,
        turma: '15'
    },
    {
        nome: "jose",
        idade: 45,
        nota: 5,
        turma: '21'
    },
    {
        nome: "maria",
        idade: 27,
        nota: 6,
        turma: '7'
    }
]

function mediaFinal(alunos, media) {
    let novoArray = [];

    for(let i = 0; i < alunos.length; i++) {
        const {nome, nota} = alunos[i];
        if( nota >= media ) {
            novoArray.push( {nome, nota} )
        }
    }
    return novoArray;
    console.log(novoArray);
}