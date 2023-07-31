const cr = document.getElementById('container');
const logoHTML =  document.createElement('img');
const title = document.createElement('h1');

title.innerHTML = 'Logo do HTML 5'

logoHTML.src = './logo do html.jpg';
logoHTML.width = '200'

cr.appendChild(title);
cr.appendChild(logoHTML);

cr.removeChild(title);