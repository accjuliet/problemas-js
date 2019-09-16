//12.- Hacer un programa que imprima los números del 1 al 100 
//y que calcule la suma de todos los
//números pares por un lado, y por otro, la de todos los impares.

var sumaImpar = 0;
var sumaPar = 0;

for (var i = 1;i<=100;i++){
    console.log(i);
    if(i%2==0){
        sumaPar+=i;
    }else{
        sumaImpar+=i;
    }
}

console.log("Suma par: " + sumaPar);
console.log("Suma impar: " + sumaImpar);