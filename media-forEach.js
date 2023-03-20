const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;
                        //da para colocar mais parâmetros
notas.forEach(function (nota) {
    somaDasNotas += nota;
});

const media = somaDasNotas / notas.length;
console.log(`A media é de: ${media}`);