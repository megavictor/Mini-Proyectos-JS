// Selecciona los elementos del DOM (Document Object Model) con los que vamos a interactuar.
const changeColorBtn = document.getElementById('changeColorBtn'); // Botón que dispara el cambio de color.
const colorValueSpan = document.getElementById('colorValue'); // Elemento span donde se muestra el valor del color.
const body = document.body; // El elemento body de la página, cuyo fondo vamos a cambiar.
const rgbLink = document.getElementById('rgbLink'); // Enlace para activar el modo de color RGB.
const hexLink = document.getElementById('hexLink'); // Enlace para activar el modo de color HEX.

// Variable booleana para rastrear el modo de color actual.
// 'false' indica modo RGB, 'true' indica modo HEX.
let isHexMode = false;

/**
 * Genera un número entero aleatorio entre 0 y 255 (inclusive).
 * Este número se utiliza para los componentes Rojo, Verde y Azul del color RGB.
 * @returns {number} Un número entero aleatorio entre 0 y 255.
 */
function getRandomNumber() {
  return Math.floor(Math.random() * 256);
}

/**
 * Genera un color en formato RGB (Red, Green, Blue) utilizando números aleatorios.
 * @returns {string} Una cadena de texto representando el color en formato 'rgb(r, g, b)'.
 */
function getRandomColorRGB() {
  const red = getRandomNumber();
  const green = getRandomNumber();
  const blue = getRandomNumber();
  return `rgb(${red}, ${green}, ${blue})`;
}

/**
 * Genera un color en formato hexadecimal (HEX) utilizando caracteres aleatorios.
 * El formato HEX consiste en un '#' seguido de seis caracteres hexadecimales (0-9 y A-F).
 * @returns {string} Una cadena de texto representando el color en formato '#RRGGBB'.
 */
function getRandomColorHex() {
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let hexColor = "#";
  // Loop para generar los seis caracteres hexadecimales del color.
  for (let i = 0; i < 6; i++) {
    hexColor += hex[Math.floor(Math.random() * hex.length)];
  }
  return hexColor;
}

/**
 * Event listener para el clic en el botón 'changeColorBtn'.
 * Cuando se hace clic, genera un color aleatorio en el formato actual (RGB o HEX)
 * y actualiza el color de fondo del body y el texto del span.
 */
changeColorBtn.addEventListener('click', () => {
  let color;
  // Verifica el modo actual para generar el color en el formato correcto.
  if (isHexMode) {
    color = getRandomColorHex(); // Genera un color HEX.
    colorValueSpan.textContent = color; // Muestra el valor HEX en el span.
  } else {
    color = getRandomColorRGB(); // Genera un color RGB.
    colorValueSpan.textContent = color; // Muestra el valor RGB en el span.
  }
  // Aplica el color generado como el color de fondo del body.
  body.style.backgroundColor = color;
});

/**
 * Event listener para el clic en el enlace 'hexLink'.
 * Cuando se hace clic, previene la navegación del enlace,
 * establece el modo a HEX, genera un color HEX aleatorio y actualiza
 * el texto del span y el color de fondo del body.
 */
hexLink.addEventListener('click', (event) => {
  event.preventDefault(); // Evita que el navegador siga el enlace (recargue la página).
  isHexMode = true; // Establece el modo a HEX.
  const hexColor = getRandomColorHex(); // Genera un color HEX.
  colorValueSpan.textContent = hexColor; // Muestra el valor HEX en el span.
  body.style.backgroundColor = hexColor; // Aplica el color HEX como fondo.
});

/**
 * Event listener para el clic en el enlace 'rgbLink'.
 * Cuando se hace clic, previene la navegación del enlace,
 * establece el modo a RGB, genera un color RGB aleatorio y actualiza
 * el texto del span y el color de fondo del body.
 */
rgbLink.addEventListener('click', (event) => {
  event.preventDefault(); // Evita que el navegador siga el enlace.
  isHexMode = false; // Establece el modo a RGB.
  const rgbColor = getRandomColorRGB(); // Genera un color RGB.
  colorValueSpan.textContent = rgbColor; // Muestra el valor RGB en el span.
  body.style.backgroundColor = rgbColor; // Aplica el color RGB como fondo.
});

/**
 * Event listener para el evento 'load' de la ventana (cuando la página se carga completamente).
 * Inicializa la página en modo RGB, genera un color RGB aleatorio
 * y lo establece como el color de fondo inicial y el texto del span.
 */
window.addEventListener('load', () => {
  isHexMode = false; // Asegura que el modo inicial sea RGB.
  const initialRGBColor = getRandomColorRGB(); // Genera un color RGB inicial.
  body.style.backgroundColor = initialRGBColor; // Establece el color de fondo inicial.
  colorValueSpan.textContent = initialRGBColor; // Muestra el valor RGB inicial en el span.
});