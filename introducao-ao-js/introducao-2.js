/* (function(x1, x2, operador) {
    return eval(`${x1} ${operador} ${x2}`);
})(10,2, "-"); */
/* let resultado = calc(10,2, "-");
console.log(resultado); */

/* let calc = (x1, x2, operador) => {
    return eval(`${x1} ${operador} ${x2}`);
}
let resultado = calc(5,8,"*");
console.log(resultado); */

/* window.addEventListener('focus', event => {
    console.log("focus");
});

document.addEventListener('click', event => {
    console.log("click");
});   */

/* let agora = new Date;
console.log(agora.toLocaleDateString("pt-br")); */
/* console.log(agora.getDate());
console.log(agora.getFullYear());
console.log(agora.getMonth()); */

/* let carros = ["palio 98", "toro", "uno", 10, true, new Date(), function(){}];
console.log(carros);
console.log(carros.length);
console.log(carros[0]);
console.log(carros[5]);
console.log(carros[5].getFullYear());
console.log(carros[6]());

carros.forEach(function(value, index) {
    console.log(index, value);
}); */

/* let celular = function() {
    this.cor = "prata";
    this.ligar = function () {
        console.log ("uma ligação");
        return "ligando"
    }
}
let objeto = new celular ();
/* console.log(objeto.cor); */
/* console.log(objeto.ligar());

class marca {
    constructor() {
        this.cor = "preto"
    }
    call() {
        console.log ("uma ligação");
        return "ligando"
    }
}
let object = new marca();
console.log(object);
console.log(object.call()); */