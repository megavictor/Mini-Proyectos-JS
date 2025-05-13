// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

// select items
const img = document.getElementById('person-img');       // Obtiene el elemento de la imagen
const author = document.getElementById('author');    // Obtiene el elemento del nombre del autor
const job = document.getElementById('job');           // Obtiene el elemento del título del trabajo
const info = document.getElementById('info');          // Obtiene el elemento del texto de la reseña

const prevBtn = document.querySelector('.prev-btn');  // Obtiene el botón anterior
const nextBtn = document.querySelector('.next-btn');  // Obtiene el botón siguiente
const randomBtn = document.querySelector('.random-btn'); // Obtiene el botón aleatorio

// set starting item
let currentItem = 0;  // Inicializa el índice de la reseña actual en 0 (la primera reseña)

// load initial item
window.addEventListener('DOMContentLoaded', function () {  // Espera a que se cargue el contenido HTML
  const item = reviews[currentItem];                 // Obtiene la primera reseña del array de reseñas
  img.src = item.img;                             // Establece la fuente de la imagen
  author.textContent = item.name;                    // Establece el nombre del autor
  job.textContent = item.job;                       // Establece el título del trabajo
  info.textContent = item.text;                      // Establece el texto de la reseña
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];           // Obtiene la reseña en el índice dado
  img.src = item.img;                   // Actualiza la fuente de la imagen
  author.textContent = item.name;          // Actualiza el nombre del autor
  job.textContent = item.job;             // Actualiza el título del trabajo
  info.textContent = item.text;            // Actualiza el texto de la reseña
}

// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;                              // Incrementa el índice para ir a la siguiente reseña
  if (currentItem > reviews.length - 1) {  // Comprueba si el índice está fuera de los límites (después de la última reseña)
    currentItem = 0;                         // Se restablece a la primera reseña si está fuera de los límites
  }
  showPerson(currentItem);                 // Muestra la siguiente reseña
});

// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;                              // Decrementa el índice para ir a la reseña anterior
  if (currentItem < 0) {                  // Comprueba si el índice está fuera de los límites (antes de la primera reseña)
    currentItem = reviews.length - 1;         // Se establece en la última reseña si está fuera de los límites
  }
  showPerson(currentItem);                 // Muestra la reseña anterior
});

// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello');                       // Registra 'hello' en la consola (para fines de depuración)
  currentItem = Math.floor(Math.random() * reviews.length);  // Genera un índice aleatorio dentro de los límites del array de reseñas
  showPerson(currentItem);                 // Muestra la reseña aleatoria
});
