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

/**==============================================
 *                CALCULO DE LA MODA
 *=============================================**/

const lista3 = [1, 2, 3, 4, 67, 2, 3, 5, 7, 9, 8, 1, 2, 2, 3, 5, 3, 4];

const listaCount = {};

lista3.map((item) => {
    if (listaCount[item]) {
        listaCount[item] += 1;
    } else {
        listaCount[item] = 1;
    }
});

let lista3Array = Object.entries(listaCount).sort((a, b) => a[1] - b[1]);

function storeModa(currentNum) {
    let count = 1;
    let moda = { number: currentNum, times: count };

    return {
        countOcurrences: function (num) {
            if (moda[num]) {
                moda["times"] += 1;
            }
        },
    };
}

function calcularModa(lista) {
    lista.sort((a, b) => a - b);
    const listaCount = {};

    lista.map((item) => {
        if (listaCount[item]) {
            listaCount[item] += 1;
        } else {
            listaCount[item] = 1;
        }
    });

    let arrayItemsRepeated = Object.entries(listaCount).sort(
        (a, b) => a[1] - b[1]
    );
    let lastItem = arrayItemsRepeated[arrayItemsRepeated.length - 1];
    let moda = arrayItemsRepeated.filter((item) => lastItem[1] === item[1] && item[1] !== 1 && lastItem[1] !== 1);

    return moda;
}
