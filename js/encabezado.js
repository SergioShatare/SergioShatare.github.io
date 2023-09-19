//AQUÍ VA EL FUNCIONAMIENTO DINAMICO DEL ENCABEZADO

//Variables para el menu, boton de cerrar y abrir el menu
var a = document.getElementById('menu');
var b = document.getElementById('abrir');
var c = document.getElementById('bloque');

//funcion que mueven las cajas hacia la vista del usuario
function abrirMenu() {
    a.style.right = '0%';
    b.style.left = '130px';
    b.style.zIndex = '-1';
    c.style.left = '0%';
}

//funcion que mueven las cajas hacia la no vista del usuario
function cerrarMenu() {
    a.style.right = '-240px';
    b.style.left = '-130px';
    b.style.zIndex = '1';
    c.style.left = '-100%';
}