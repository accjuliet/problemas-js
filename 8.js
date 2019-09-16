//8.- Hacer un programa que solo nos permita introducir S o N.
while(true){
    var readline = require('readline-sync');
    var letra = readline.question("Ingresa tu letra: ");
    if(letra=== "N" || letra==="S"){
        continue;
    }else{
        break;
    }
}