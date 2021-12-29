/*================== Calcula el descuento y devuelve el precio con descuento =================*/
function getPrecioConDescuento(precio, descuento) {
  let precioDescuento = (precio * descuento) / 100;
  let precioConDescuento = precio - precioDescuento;
  return precioConDescuento;
}

/*================== Obtiene el descuento y lo muestra en una etiqueta HTML =================*/
function mostrarPrecioFinal(precio, descuento) {
  let precioConDescuento = getPrecioConDescuento(precio, descuento);
  let lblPrecioFinal = document.getElementById("precioFinal");
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
    mostrarPrecioFinal(Number(this.value), Number(inputDescuento.value));
  }
};

/**
 * Evento oninput que ejecuta la function mostrarPrecioFinal si el input precio tiene un dato
 */
inputDescuento.oninput = function () {
  if (inputPrecio.value) {
    mostrarPrecioFinal(Number(inputPrecio.value), Number(this.value));
  }
};
