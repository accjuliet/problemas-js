//Introducir dos números por teclado y mediante un menú, 
//calcule su suma, su resta, su multiplicación o su división.

var readline = require('readline-sync');

var number1 = parseInt(readline.question("What is your number 1?: "));
var number2 = parseInt(readline.question("What is your number 2?: "));
console.log("1. Suma");
console.log("2. Resta");
console.log("3. Multiplicacion");
console.log("4. División");

var choice = readline.question("What is your choice?: ");
switch (choice) {
    case "1":
        console.log(number1 + number2)
        break;
    case "2":
        console.log(number1 - number2)
        break;
    case "3":
        console.log(number1 * number2)
        break;
    case "4":
        console.log(number1 / number2)
        break;
    default:
        break;
}