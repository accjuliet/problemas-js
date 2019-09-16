//14.- Hacer un programa que imprima el mayor y 
//el menor de una serie de cinco números que
//vamos introduciendo por teclado.
var myArray = [];

for (var i=0;i<5;i++){
    var readline = require('readline-sync');
    var number = readline.question("What is your number?: ");
    myArray[i] = number;
}

myArray.sort();
console.log(myArray);
console.log("Numero mayor: " + myArray[0] + ". Numero menor: " + myArray[4]);