//22.- Introducir una frase por teclado. 
//Imprimirla cinco veces en filas consecutivas, pero cada
//impresión ir desplazada cuatro columnas hacia la derecha.

var readline = require('readline-sync');
var frase = readline.question("What is your phrase?: ");
line = "    "

for(var i=0;i<5;i++){
    console.log(line + frase);
    line +=line;
}