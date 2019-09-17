//35.- Generar una matriz de 4 filas y 5 columnas 
//con números aleatorios entre 1 y 100, e imprimirla.


var matrix = [];
for(var i=0; i<4; i++) {
    matrix[i] = new Array(5);
}

for(var i=0; i<4; i++) {
    for(var j=0;j<5;j++){
        matrix[i][j]= Math.floor(Math.random() * 100) + 1  ;

    }
}

console.log(matrix);