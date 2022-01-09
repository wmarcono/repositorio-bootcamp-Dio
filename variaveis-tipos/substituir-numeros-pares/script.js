// Troca todos os elementos pares e diferentes de zero de um array pelo numero 0.
// Se o array for vazio, retorna -1

function substituirNumeros( arr = [] ) {
    if( typeof arr !== 'object' ) return
    if( arr.length === 0 ) return -1;
    
    for(let i = 0; i < arr.length; i++) {
        if( arr[i] % 2 === 0 || arr[i] === 0 ) {
            arr[i] = 0;
        }
    }

    return `Substituindo o Array informado por: [${arr}]`;
}
