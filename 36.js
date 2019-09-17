//36.- Generar una matriz de 4 filas y 5 columnas 
//con números aleatorios entre 1 y 100, y hacer su
//matriz transpuesta.

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

function transposeArray(array, arrayLength){
    var newArray = [];
    for(var i = 0; i < array.length; i++){
        newArray.push([]);
    };

    for(var i = 0; i < array.length; i++){
        for(var j = 0; j < arrayLength; j++){
            newArray[j].push(array[i][j]);
        };
    };

    return newArray;
}

console.log(transposeArray(matrix,matrix.length));