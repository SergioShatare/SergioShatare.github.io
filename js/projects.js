var b = document.getElementById('projects-more');
var c = document.getElementById('more');
var d = document.getElementById('less');

b.style.display = 'none'
d.style.display = 'none'


function showMore() {
    b.style.display = 'block'
    c.style.display = 'none'
    d.style.display = 'block'
}

function showLess() {
    b.style.display = 'none'
    c.style.display = 'block'
    d.style.display = 'none'
}