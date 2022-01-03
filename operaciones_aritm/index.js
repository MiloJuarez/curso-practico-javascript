/**==============================================
 *                CALCULO DEL PROMEDIO
 *=============================================**/
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

/**==============================================
 *                CALCULO DE LA MEDIANA
 *=============================================**/

const lista2 = [100, 400, 10000, 200, 500, 600, 40000000];
const mitadLista2 = parseInt(lista2.length / 2);

function sortList(lista) {
    return lista.sort((a, b) => a - b);
}

function calcularMediana(lista) {
    let mediana;

    lista = sortList(lista);

    if (lista.length % 2 === 0) {
        const item = lista[mitadLista2 - 1];
        const item2 = lista[mitadLista2];

        mediana = calcularMediaAritmetica([item, item2]);
    } else {
        mediana = lista[mitadLista2];
    }

    return mediana;
}
