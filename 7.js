//7.- Introducir tantas frases como queramos y contarlas.

var contador = 0;

while(true){
    var readline = require('readline-sync');
    var frase = readline.question("Ingresa tu frase: ");
    contador++;
    console.log("Numero de frase: " + contador)
}