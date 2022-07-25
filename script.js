/**
 * h1 {}
 * .parrafp {}
 * #pid {}
 */
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo = document.querySelector('.parrafo');
// const parrafo = document.getElementsByClassName('parrafo');
const pid = document.querySelector('#pid');
// const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    parrafo,
    pid,
    input
});

// h1.innerHTML = 'Hello,<br> world!';
h1.innerText = 'Hello,<br> world!';
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'Hola Mundo');
// console.log(h1.getAttribute('class'));

h1.classList.add('hola_mundo');
h1.classList.remove('titulo');
// h1.classList.toggle();
// h1.classList.contains();

input.value = 'drummes12';

console.log(document.createElement('img'));
const img = document.createElement('img');
img.setAttribute('src', 'https://cnnespanol.cnn.com/wp-content/uploads/2022/07/220713165438-rba-web-nasa-full-169.jpg?quality=100&strip=info&w=414&h=311&crop=1');
console.log(document.createElement('img'));

pid.appendChild(img);