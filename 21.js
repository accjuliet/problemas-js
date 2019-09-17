//21.- Hacer un programa que calcule independientemente
// la suma de los pares y los impares de
//los números entre 1 y 1000.

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