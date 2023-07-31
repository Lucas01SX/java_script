const lg = document.getElementById('logo');
const att = lg.getAttribute('alt');

console.log(att);

lg.setAttribute('width', '200');

lg.removeAttribute('width');