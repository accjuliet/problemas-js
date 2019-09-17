//24.- Comprobar si un número mayor o igual que la unidad es primo.
function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0)
            return false;
    return num > 1;
}

var readline = require('readline-sync');
var number = readline.question("What is your number?: ");

if(isPrime(number)||isPrime(number+1)){
    console.log("un número mayor o igual que la unidad es primo.");
}else{
    console.log("No es primo");
}
