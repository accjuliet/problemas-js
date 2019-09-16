//5.-Hacer un programa que imprima los números impares hasta el 100 
//y que imprima cuantos impares hay.
var impares = 0;

for (var i = 0;i<=100;i++){
    if(i%2!=0){
        console.log(i);
        impares++;
    }
}

console.log(impares);