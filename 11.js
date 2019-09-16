//11.- Imprimir y contar los múltiplos de 3 desde el uno hasta 
//un número que introducimos por teclado.

var readline = require('readline-sync');
var number = readline.question("What is your number?: ");
var contador = 0;

for (var i = 0;i<=number;i++){
    if(i%3==0){
        console.log(i);
        contador++;
    }
}

console.log(contador);