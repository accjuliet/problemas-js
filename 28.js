//28.- Simular el lanzamiento de una moneda al aire e imprimir cara o cruz.
var number = Math.floor((Math.random() * 2) + 1);
if(number==1){
    console.log("Cruz");
}else{
    console.log("Cara");
}