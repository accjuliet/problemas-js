//9.- Introducir un número por teclado y que nos diga si es positivo o negativo.
var readline = require('readline-sync');
var number = readline.question("What is your number?: ");

if(number<0){
    console.log("Es negativo");
}else{
    console.log("Es positivo");
}