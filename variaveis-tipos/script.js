// Este método tambem funciona com frases

function verificaPalindromo( frase ) {
    if(!typeof(frase) === 'string') return

    let novaFrase = new Array();
    let fraseReversa = new Array();
        for(let i = 0; i < frase.length; i++) {
            if(frase[i] != ' ') {
                novaFrase.push(frase[i])
                fraseReversa.unshift(frase[i])
            }
        }  

    return novaFrase.join('') === fraseReversa.join('') ? 'É um palindromo' : 'Não é palindromo';
}