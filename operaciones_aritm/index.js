const lista = [100, 200, 300, 500];

let sumaLista = 0;

for (let i = 0; i < lista.length; i++) {
    sumaLista += lista[i];
}

const promedioLista = sumaLista / lista.length;

function calcularMediaAritmetica(lista) {
    //   let sumaLista = 0;

    //   for (let i = 0; i < lista.length; i++) {
    //     sumaLista += lista[i];
    //   }

    const sumaLista = lista.reduce((previousValue = 0, currentValue) => {
        return previousValue + currentValue;
    });
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}
