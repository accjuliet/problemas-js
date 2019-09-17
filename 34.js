//34.- Usando el segundo ejemplo, hacer un programa que busque una nota en la lista.
var calificaciones = [];

var readline = require('readline-sync');


for(var i=0;i<10;i++){
    var calificacion = parseInt(readline.question("Calificacion de la asg "+ i + ": "));
    calificaciones[i] = calificacion;
}

var buscar = parseInt(readline.question("Calificacion a buscar: "));
for(var i=0;i<10;i++){
    if(buscar==calificaciones[i])
        console.log("La calificacion "+buscar+" esta en la asignatura "+i);
}