//15.- Introducir dos números por teclado. Imprimir los 
//números naturales que hay entre ambos
//números empezando por el más pequeño, contar cuántos hay y cuántos de ellos son pares.
//Calcular la suma de los impares.

var readline = require('readline-sync');
var number1 = readline.question("What is your number?: ");
var number2 = readline.question("What is your number?: ");
var contadorGeneral = 0;
var contadorPares = 0;
var sumaImpares = 0;

for (var i = number1;i<=number2;i++){
    console.log(i);
    contadorGeneral++;
    if(i%2==0){
        contadorPares++;
    }else{
        sumaImpares+=i;
    }
}

console.log("Contador general: " + contadorGeneral);

console.log("Contador pares: " + contadorPares);

console.log("Suma impares: " + sumaImpares);