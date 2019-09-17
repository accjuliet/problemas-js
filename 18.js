//18.- Hacer un programa que cuente las veces que 
//aparece una determinada letra en una frase
//que introduciremos por teclado.
var readline = require('readline-sync');

var frase = readline.question("What is your phrase?: ");
var str = new String(frase);
var contador = 0;

for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === 'a') {
        contador++;
    }

}

console.log(contador);