//33.- Hacer un programa que lea las calificaciones
// de un alumno en 10 asignaturas, las almacene
//en y calcule e imprima su media.
var calificaciones = [];

var readline = require('readline-sync');


for(var i=0;i<10;i++){
    var calificacion = parseInt(readline.question("Calificacion de la asg "+ i + ": "));
    calificaciones[i] = calificacion;
}

calificaciones.sort((a, b) => a - b);
let lowMiddle = Math.floor((calificaciones.length - 1) / 2);
let highMiddle = Math.ceil((calificaciones.length - 1) / 2);
let median = (calificaciones[lowMiddle] + calificaciones[highMiddle]) / 2;

console.log(median);