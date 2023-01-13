const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const btnCalcular = document.querySelector('#btnCalcular');
const btnCalcular2 = document.querySelector('#btnCalcular2');
const btnCalcular3 = document.querySelector('#btnCalcular3');

function sumar() {
    document.getElementById('res').innerText = String(Number(num1.value) + Number(num2.value));
}

btnCalcular2.addEventListener('click', sumar);

btnCalcular3.addEventListener('click', () => {
    document.getElementById('res2').innerText = String(Number(num1.value) + Number(num2.value));
});

