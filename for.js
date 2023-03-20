const numeros = [100, 200, 300, 400, 500, 600];


//Primeira expressão: é excutada uma unica vez
//Segunda expressão: é a condição de excução
//Terceira expressão: é excutada sempre no final do bloco

for (let indice = 0; indice < numeros.length; indice++) {
    let numero = numeros[indice];
    console.log(numero);
}
