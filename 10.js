//10.- Introducir un número por teclado y que nos diga si es par o impar.

var readline = require('readline-sync');
var number = readline.question("What is your number?: ");

if(number%2==0){
    console.log("Es par");
}else{
    console.log("Es impar");
}