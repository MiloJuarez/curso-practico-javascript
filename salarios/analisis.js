const salariosMex = mexico.map((person) => person.salary);
salariosMex.sort((salaryA, salaryB) => salaryA - salaryB);

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce((previousValue = 0, currentValue) => {
        return previousValue + currentValue;
    });
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
    let mediana;

    if (lista.length % 2 === 0) {
        const item = lista[mitad - 1];
        const item2 = lista[mitad];

        mediana = calcularMediaAritmetica([item, item2]);
    } else {
        mediana = lista[mitad];
    }

    return mediana;
}
