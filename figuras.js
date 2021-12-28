/*================================ Codigo del cuadrado ==============================*/
// console.group("================ Cuadrados ==============");
const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden:", ladoCuadrado + "cm");

let perimetroCuadrado = (lado) => lado * 4;
// console.log(
//   "El perimetro del cuadrado es: ",
//   perimetroCuadrado(ladoCuadrado) + "cm"
// );

let areaCuadrado = (lado) => lado * lado;
// console.log("El área del cuadrado es: ", areaCuadrado(ladoCuadrado) + "cm^2");

// console.groupEnd();

/*================================ Codigo del triángulo ==============================*/
// console.group("================ Triángulos ==============");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

// console.log(
//   "Los lados del triángulo miden: " +
//     ladoTriangulo1 +
//     "cm, " +
//     ladoTriangulo2 +
//     "cm, " +
//     baseTriangulo +
//     "cm"
// );

// console.log("La altura del triángulo mide:", alturaTriangulo + "cm");

let perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
// console.log(
//   "El perimetro del triángulo es: ",
//   perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) + "cm"
// );

let areaTriangulo = (base, altura) => (base * altura) / 2;
// console.log(
//   "El área del triángulo es: ",
//   areaTriangulo(baseTriangulo, alturaTriangulo) + "cm^2"
// );

// console.groupEnd();

/*================================ Codigo del triángulo ==============================*/
// console.group("================ Círculo ==============");

const radioCirculo = 7;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

let diametroCirculo = (radio) => radio * 2;
// console.log("El diametro del circulo es: " + diametroCirculo + "cm");

const PI = Math.PI;
// console.log("El PI es igual a: " + PI);

let perimetroCirculo = (radio, pi) => diametroCirculo(radio) * pi;
// console.log(
//   "El perímetro del circulo es: " + perimetroCirculo(diametroCirculo.PI) + "cm"
// );

let areaCirculo = (radio, pi) => radio * radio * pi;
// console.log(
//   "El area del circulo es: " + areaCirculo(radioCirculo, PI) + "cm^2"
// );

// console.groupEnd();
