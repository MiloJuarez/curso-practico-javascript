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
