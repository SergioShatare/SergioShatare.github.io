//AQUÍ VA EL FUNCIONAMIENTO DINAMICO DEL PIE DE PAGINA

//Variables para el menu, boton de cerrar y abrir el ventana de pie de pagina
const acercaclo = document.getElementById('closeAcerca');
const ventana = document.querySelector(".div-acerca");

const nos = document.getElementById('btnNostros');
const pol = document.getElementById('btnPolitica');
const ter = document.getElementById('btnTerminos');
const ayu = document.getElementById('btnAyuda');

const divnos = document.getElementById('nosotros');
const divpol = document.getElementById('politica');
const divter = document.getElementById('terminos');
const divayu = document.getElementById('ayuda');



function abrirVentana() {
    ventana.style.top = '0';
}

function nosotros() {
    nos.style.backgroundColor = 'black';
    nos.style.color = 'white';

    pol.style.backgroundColor = 'white';
    pol.style.color = 'black';

    ter.style.backgroundColor = 'white';
    ter.style.color = 'black';

    ayu.style.backgroundColor = 'white';
    ayu.style.color = 'black';

    divnos.style.display = 'block';
    divpol.style.display = 'none';
    divter.style.display = 'none';
    divayu.style.display = 'none';
}

function politica() {
    nos.style.backgroundColor = 'white';
    nos.style.color = 'black';

    pol.style.backgroundColor = 'black';
    pol.style.color = 'white';

    ter.style.backgroundColor = 'white';
    ter.style.color = 'black';

    ayu.style.backgroundColor = 'white';
    ayu.style.color = 'black';

    divnos.style.display = 'none';
    divpol.style.display = 'block';
    divter.style.display = 'none';
    divayu.style.display = 'none';
}

function terminos() {
    nos.style.backgroundColor = 'white';
    nos.style.color = 'black';

    pol.style.backgroundColor = 'white';
    pol.style.color = 'black';

    ter.style.backgroundColor = 'black';
    ter.style.color = 'white';

    ayu.style.backgroundColor = 'white';
    ayu.style.color = 'black';

    divnos.style.display = 'none';
    divpol.style.display = 'none';
    divter.style.display = 'block';
    divayu.style.display = 'none';
}

function ayuda() {
    nos.style.backgroundColor = 'white';
    nos.style.color = 'black';

    pol.style.backgroundColor = 'white';
    pol.style.color = 'black';

    ter.style.backgroundColor = 'white';
    ter.style.color = 'black';

    ayu.style.backgroundColor = 'black';
    ayu.style.color = 'white';

    divnos.style.display = 'none';
    divpol.style.display = 'none';
    divter.style.display = 'none';
    divayu.style.display = 'block';
}


function cerrarVentana() {
    ventana.style.top = '100%';
}