/*================== Calcula el descuento y devuelve el precio con descuento =================*/
function getPrecioConDescuento(precio, descuento) {
  let precioDescuento = (precio * descuento) / 100;
  let precioConDescuento = precio - precioDescuento;
  return precioConDescuento;
}

/*================== Obtiene el descuento y lo muestra en una etiqueta HTML =================*/
function mostrarPrecioFinal(precio, descuento, idlbl) {
  let precioConDescuento = getPrecioConDescuento(precio, descuento);
  let lblPrecioFinal = document.getElementById(idlbl);
  lblPrecioFinal.innerText = "$" + precioConDescuento.toFixed(2);
}

/*================== Inputs de precio y descuento =================*/
let inputPrecio = document.getElementById("precio");
let inputDescuento = document.getElementById("descuento");

/**
 * Evento oninput que ejecuta la function mostrarPrecioFinal si el input descuento tiene un dato
 */
inputPrecio.oninput = function () {
  if (inputDescuento.value) {
    mostrarPrecioFinal(
      Number(this.value),
      Number(inputDescuento.value),
      "precioFinal"
    );
  }
};

/**
 * Evento oninput que ejecuta la function mostrarPrecioFinal si el input precio tiene un dato
 */
inputDescuento.oninput = function () {
  if (inputPrecio.value) {
    mostrarPrecioFinal(
      Number(inputPrecio.value),
      Number(this.value),
      "precioFinal"
    );
  }
};

const cupones = [
  { name: "merry_christmas", disscount: 45 },
  { name: "end_of_year", disscount: 60 },
  { name: "new_year", disscount: 30 },
  { name: "valentine_days", disscount: 35 },
  { name: "vip_pass", disscount: 50 },
];

/*================== Input de cupon de descuento =================*/
let inputCupon = document.getElementById("cupon");
let inputPOriginal = document.getElementById("precioOriginal");
let lblCuponInvalido = document.getElementById("cuponInvalido");
let cuponDescuento = document.getElementById("cuponDescuento");

let validCupon;

inputPOriginal.oninput = function () {
  if (validCupon) {
    mostrarPrecioFinal(
      Number(this.value),
      Number(validCupon.disscount),
      "precioConCD"
    );
  }
};

inputCupon.oninput = function () {
  let cuponName = this.value;
  validCupon = cupones.find((cupon) => cupon.name === cuponName);

  if (!validCupon) {
    let lblPrecioFinal = document.getElementById("precioConCD");
    lblPrecioFinal.innerText = "$0.00";
    lblCuponInvalido.style.display = "block";
    cuponDescuento.innerText = "0";
    validCupon = null;
  } else {
    lblCuponInvalido.style.display = "none";
    cuponDescuento.innerText = validCupon.disscount;

    if (inputPOriginal.value) {
      mostrarPrecioFinal(
        Number(inputPOriginal.value),
        Number(validCupon.disscount),
        "precioConCD"
      );
    }
  }
};
