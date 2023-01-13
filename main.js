const h1 = document.querySelector('h1'); // para seleccionar una etiqueta
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

const todosLosP = document.querySelectorAll('p');

console.log(todosLosP);

h1.innerText = 'Prueba de Platzi <br> Estoy <span style="color: red;">Estudiando</span> ';


console.log(h1.getAttribute('atriPrueba'));

// h1.setAttribute('class', 'rojo');
h1.classList.add('azul');
h1.classList.remove('verde');

// input.value = "juan";
input.placeholder = "lo cambio";

const h2 = document.createElement('h2');
h2.innerText = 'Prueba de CreateElement';

console.log(h2);

const imagen = document.createElement('img');
imagen.setAttribute('src', 'https://www.tooltyp.com/wp-content/uploads/2021/04/1900x920-slow-living-la-tendencia-de-consumo-que-arrasa-760x404.jpg')


console.log(imagen);

const contenedorImagen = document.querySelector('#contenedor-imagen');
contenedorImagen.append(imagen);













