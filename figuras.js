/*================================ Codigo del cuadrado ==============================*/
let perimetroCuadrado = (lado) => lado * 4;
let areaCuadrado = (lado) => lado * lado;

/*================================ Codigo del triángulo ==============================*/
let perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
let areaTriangulo = (base, altura) => (base * altura) / 2;

/*================================ Codigo del triángulo ==============================*/
let diametroCirculo = (radio) => radio * 2;
let perimetroCirculo = (radio, pi) => diametroCirculo(radio) * pi;
let areaCirculo = (radio, pi) => radio * radio * pi;

let pi = document.getElementById("pi");
pi.innerHTML = Math.PI;

let btnCuadrado = document.getElementById("btnCuadrado");
let btnTriangulo = document.getElementById("btnTriangulo");
let btnCirculo = document.getElementById("btnCirculo");

btnCuadrado.onclick = function () {
  // Input
  let lCuadrado = document.getElementById("lCuadrado");
  let uCuadrado = document.getElementById("uCuadrado");

  // Etiqueta de Perímetro y Área
  let pCuadrado = document.getElementById("pCuadrado");
  let aCuadrado = document.getElementById("aCuadrado");

  let abr = uCuadrado.value != "Pulgadas" ? uCuadrado.value : '"';

  pCuadrado.innerHTML =
    (
      Math.round(perimetroCuadrado(Number(lCuadrado.value)) * 100) / 100
    ).toFixed(2) + abr;
  aCuadrado.innerHTML =
    (Math.round(areaCuadrado(Number(lCuadrado.value)) * 100) / 100).toFixed(2) +
    abr;
};

btnTriangulo.onclick = function () {
  // Inputs
  let lATriangulo = document.getElementById("lATriangulo");
  let lBTriangulo = document.getElementById("lBTriangulo");
  let bTriangulo = document.getElementById("bTriangulo");
  let alTriangulo = document.getElementById("alTriangulo");
  let uTriangulo = document.getElementById("uTriangulo");

  // Etiqueta de Perímetro y Área
  let pTriangulo = document.getElementById("pTriangulo");
  let aTriangulo = document.getElementById("aTriangulo");

  let abr = uTriangulo.value != "Pulgadas" ? uTriangulo.value : '"';

  pTriangulo.innerHTML =
    (
      Math.round(
        perimetroTriangulo(
          Number(lATriangulo.value),
          Number(lBTriangulo.value),
          Number(bTriangulo.value)
        ) * 100
      ) / 100
    ).toFixed(2) + abr;
  aTriangulo.innerHTML =
    (
      Math.round(
        areaTriangulo(Number(bTriangulo.value), Number(alTriangulo.value)) * 100
      ) / 100
    ).toFixed(2) + abr;
};

btnCirculo.onclick = function () {
  // Input
  let rCirculo = document.getElementById("rCirculo");
  let uCirculo = document.getElementById("uCirculo");

  // Etiqueta de Perímetro y Área
  let pCirculo = document.getElementById("pCirculo");
  let aCirculo = document.getElementById("aCirculo");

  let abr = uCirculo.value != "Pulgadas" ? uCirculo.value : '"';

  pCirculo.innerHTML =
    (
      Math.round(perimetroCirculo(Number(rCirculo.value), Math.PI) * 100) / 100
    ).toFixed(2) + abr;
  aCirculo.innerHTML =
    (
      Math.round(areaCirculo(Number(rCirculo.value), Math.PI) * 100) / 100
    ).toFixed(2) + abr;
};

btnCuadrado.disabled = true;
btnTriangulo.disabled = true;
btnCirculo.disabled = true;
