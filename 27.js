//27.- Realizar la tabla de multiplicar de un numero entre 0 y 10.
var readline = require('readline-sync');

var number = readline.question("What is your number?: ");

function multiplicar(num) {
    console.log("Tabla de multiplicar del " + num)
    for (var i = 0; i <= 10; i++) {
        console.log(i + "x" + num + "= " + i * num);
    }
}

multiplicar(number);