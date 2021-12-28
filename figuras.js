/*================================ Codigo del cuadrado ==============================*/
console.group("================ Cuadrados ==============");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden:", ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: ", perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: ", areaCuadrado + "cm^2");

console.groupEnd();

/*================================ Codigo del triángulo ==============================*/
console.group("================ Triángulos ==============");
const ladoTriangulo1 = 6;
const ladoTrinagulo2 = 6;
const baseTrinagulo = 4;
const alturaTrinagulo = 5.5;

console.log(
  "Los lados del triángulo miden: " +
    ladoTriangulo1 +
    "cm, " +
    ladoTrinagulo2 +
    "cm, " +
    baseTrinagulo +
    "cm"
);

console.log("La altura del triángulo mide:", alturaTrinagulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTrinagulo2 + baseTrinagulo;
console.log("El perimetro del triángulo es: ", perimetroTriangulo + "cm");

const areaTriangulo = (baseTrinagulo * alturaTrinagulo) / 2;
console.log("El área del triángulo es: ", areaTriangulo + "cm^2");

console.groupEnd();

/*================================ Codigo del triángulo ==============================*/
console.group("================ Círculo ==============");

const radioCirculo = 7;
console.log("El radio del circulo es: " + radioCirculo + "cm");

const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm");

const PI = Math.PI;
console.log("El PI es igual a: " + PI);

const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del circulo es: " + perimetroCirculo + "cm");

const areaCirculo = radioCirculo * radioCirculo * PI;
console.log("El area del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();
