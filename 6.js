//6.- Hacer un programa que imprima todos los números naturales 
//que hay desde el uno hasta un número que introducimos por teclado.

var readline = require('readline-sync');
var number = readline.question("What is your number?: ");

for (var i = 1;i<=number;i++){
    console.log(i);
}