//Hacer un programa que nos permita introducir un número por 
//teclado y sobre él se realicen
//las siguientes operaciones: comprobar si es primo, 
//hallar su factorial o imprimir su tabla de
//multiplicar.

var readline = require('readline-sync');
var number = parseInt(readline.question("What is your number?: "));

function multiplicar(num) {
    console.log("Tabla de multiplicar del " + num)
    for (var i = 0; i <= 10; i++) {
        console.log(i + "x" + num + "= " + i * num);
    }
}

function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0)
            return false;
    return num > 1;
}

function factorial(num) {
    if (num < 0) 
          return null;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorial(num - 1));
    }
}

console.log(multiplicar(number));
console.log("Es primo: " + isPrime(number));
console.log("Factorial: " + factorial(number));