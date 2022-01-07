
// 1 crie uma função que recebe dois números como parâmetros
// 2 confira se os dois numeros são iguais
// 3 confira se a soma dos números é maior que 10 ou menor que 20
// 4 retorne uma string dizendo  "Os numeros num1 e num2 não são iguais, 
//    Sua soma é soma, que é maior/menor que 10 e maior/menor que 20"

let resultado

function comparador(num1, num2) {
    if(num1 === num2) return console.log('são iguais')
    let param10 = '';
    let param20 = '';
    resultado = num1 + num2;

    if(resultado < 10 ) {
        param10 = "menor que 10";
    }
    if(resultado > 10 && resultado < 20) {
        param10 = "maior que 10 e ";
        param20 = "menor que 20";
    }  
    if(resultado > 20) {
        param20 = "maior que 20";
    }

    return console.log(`Os numeros ${num1} e ${num2} não são iguais, sua soma é ${resultado} ${param10} ${param20}`);
}
