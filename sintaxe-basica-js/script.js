let operacao = Number(prompt(`Digite para selecionar a operação: \n
1: adição 2: subtração 3: multiplicação 4: divisão 5: resto da divisão \n`));
let resultado;

if(operacao >= 1 && operacao <= 5) {
    let num1 = Number(prompt('digite o numero'));
    let num2 = Number(prompt('digite o numero'));
    resultado = calculo(num1, num2, operacao)
} else {
    resultado = 'valor incorreto'
}

function calculo(x, y, op) {
        switch (op) {
            case 1:
                return x + y;
            case 2:
                return x - y;
            case 3:
                return x * y;
            case 4:
                return x / y;
            case 5:
                return x % y;
        }
}

alert(resultado)
