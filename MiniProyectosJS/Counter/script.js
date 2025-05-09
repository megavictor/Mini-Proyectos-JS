// Obtiene una referencia al elemento span con el ID 'value' donde se mostrará el contador
const valueElement = document.getElementById('value');

// Obtiene referencias a los botones por sus clases
const decreaseBtn = document.querySelector('.btn-decrease');
const resetBtn = document.querySelector('.btn-reset');
const increaseBtn = document.querySelector('.btn-increase');

// Inicializa la variable del contador en 0
let count = 0;

/**
 * Función para actualizar el color del número del contador basado en su valor.
 * Negro si es 0, verde si es mayor que 0, rojo si es menor que 0.
 */
function updateColor() {
    if (count === 0) {
        valueElement.style.color = 'black'; // Establece el color del texto a negro si el contador es 0
    } else if (count > 0) {
        valueElement.style.color = 'green'; // Establece el color del texto a verde si el contador es mayor que 0
    } else {
        valueElement.style.color = 'red'; // Establece el color del texto a rojo si el contador es menor que 0
    }
}

// Agrega un event listener al botón "Decrease"
decreaseBtn.addEventListener('click', () => {
    count--; // Decrementa el valor del contador
    valueElement.textContent = count; // Actualiza el texto del elemento span con el nuevo valor
    updateColor(); // Llama a la función para actualizar el color del número
});

// Agrega un event listener al botón "Reset"
resetBtn.addEventListener('click', () => {
    count = 0; // Resetea el valor del contador a 0
    valueElement.textContent = count; // Actualiza el texto del elemento span
    updateColor(); // Llama a la función para actualizar el color del número
});

// Agrega un event listener al botón "Increase"
increaseBtn.addEventListener('click', () => {
    count++; // Incrementa el valor del contador
    valueElement.textContent = count; // Actualiza el texto del elemento span
    updateColor(); // Llama a la función para actualizar el color del número
});

// Llamada inicial a la función updateColor para establecer el color del número cuando la página carga (inicialmente será negro porque count es 0)
updateColor();